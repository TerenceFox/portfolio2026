---
title: "I Built a Personal OS with Obsidian, Todoist and Claude Code"
description: ""
date: 2026-04-14
slug: personal-os
tags: [meta, test]
draft: true
---

I open one file every morning. It has my tasks, my calendar, my meals, and space to write. I check boxes throughout the day. At night, everything syncs back. That's it. That's the whole interface.

Behind that one file, an AI agent orchestrates everything. It pulls from Todoist, Google Calendar, Gmail, and a weekly meal plan. It makes decisions so I don't have to. It remembers my preferences across conversations. And it automates the workflows that used to eat hours of my week.

Here's how the whole thing works.

---

## The Problem

Most productivity systems fail because they have too many surfaces. You check Todoist for tasks, Google Calendar for meetings, a meal planning app for food, a habit tracker for habits. By noon you've spent more time managing the system than doing the work.

I wanted one place to look. A single daily note that shows me everything I need to do, eat, and attend today. The note is the frontend. Everything else is backend infrastructure I never touch directly.

---

## The Vault

My Obsidian vault is organized with PARA (Projects, Areas, Resources, Archives):

- **Projects** have a finish line. "Launch the side project by April." "Finish the home renovation by summer." When they're done, they move to Archives.
- **Areas** are ongoing. Budget, groceries, health, hobbies. No end date, just maintenance.
- **Resources** are reference material. Coding cheatsheets, career docs, recipes.
- **Archives** are where finished projects go to rest.

Every project and area folder has two required files: a `README.md` (what is this, why does it exist, how does it work) and a `MOC.md` (a map of content — an index of every file in the folder). This convention is the foundation that makes everything else possible. Any skill can navigate any folder the same way, because the structure is always predictable.

Each project and area maps one-to-one with a Todoist project. Projects are color-coded mint green. Areas are orange. The Todoist project IDs are stored in a central registry file so Claude can reference them without searching.

But now you have two systems — a vault full of markdown files and a Todoist account full of projects — and they don't talk to each other.

---

## The Glue: Claude Code and MCP

This is where Claude Code comes in. It's Anthropic's CLI tool for Claude — an AI agent that runs in your terminal, reads and writes files, and executes commands. On its own, that's useful for coding. What makes it a productivity tool is skills and MCP.

**Skills** are custom workflows written in plain markdown. You describe the steps in natural language, list which tools the skill can use, and invoke it with a slash command. Think of them like shell scripts, but instead of bash, the instructions are English.

**MCP (Model Context Protocol)** is what connects Claude to external services. An MCP server wraps an API — Todoist, Google Calendar, Gmail, whatever — and exposes it as a set of tools that Claude can call during a conversation. When a skill says "fetch today's calendar events," Claude calls the Google Calendar MCP server. When it says "complete this task in Todoist," it calls the Todoist MCP server.

The vault and Todoist don't sync on their own. Claude bridges them. Every morning, a skill pulls tasks from Todoist into the daily note. Every evening, another skill reads the checkboxes and pushes changes back. Claude is the integration layer that makes the whole system feel like one tool.

---

## The Daily Note

The daily note is a single markdown file per day. It has YAML frontmatter for quantified-self tracking — mood, energy, sleep, whatever metrics matter to you — and four sections:

```markdown
## Tasks
- [ ] 10:00 AM — Gym (Fitness)
- [ ] Pay electric bill (Home)
- [ ] Review pull requests (Side Project)

## Events
- 2:00 PM — Dentist

## Meals
- **Breakfast:** Greek yogurt + protein powder + berries + green tea
- **Lunch:** Salad + grilled tofu
- **Snack:** Protein shake (post-workout)
- **Dinner:** Grain bowl — rice, roasted vegetables, tahini sauce

## Journal
### Reflection
### Wins
### Worries
### Gratitude
```

The Tasks, Events, and Meals sections are machine-generated. The Journal section is mine.

### Morning: `/daily-note`

When I run this skill, Claude:

1. Checks yesterday's note for tasks I marked with `[>]` (migrated/deferred) and carries them forward
2. Calls the Google Calendar API to pull today's events
3. Calls the Todoist API to pull tasks due today plus anything overdue
4. Reads the current week's meal plan and picks specific meals
5. Creates the note from a template if it doesn't exist, then writes everything in — deduplicating against anything already there

A shell hook injects today's date into every conversation automatically, so the skill always knows what "today" means without asking.

The meal selection is a good example of how the system reduces cognitive load. The weekly plan already has the nutritional thinking baked in — calories, protein targets, options for each meal. But I don't want to see options at 7am. So I taught the skill three rules: pick one option and commit (no "toast or eggs"), repeat the same dinner for 2-3 days before rotating (I batch cook), and always assign a protein shake on gym days. The plan does the thinking once. The skill removes the last bit of friction every day.

### Evening: `/close-day`

At the end of the day, this skill reads the daily note and syncs every checkbox change back to Todoist:

| Checkbox | What Happens in Todoist |
|----------|------------------------|
| `[x]` completed | Task marked done |
| `[>]` migrated | Task rescheduled to tomorrow |
| `[~]` cancelled | Task closed |
| `[ ]` still open | Nothing — listed as carry-over |

Recurring tasks automatically reappear on their next occurrence after completion. Non-recurring open tasks get picked up by tomorrow morning's `/daily-note` run.

The result: I never open Todoist. I check boxes in a markdown file, and the database updates itself.

---

## What a Project Actually Is

A project in this system isn't just a folder. It's a folder, a Todoist project, a set of skills, and a collection of conventions that let Claude automate work within it.

Every project has a plan in its README: a goal, a deadline, milestones, and a clear definition of done. The milestones become Todoist tasks with due dates. Recurring tasks handle the daily and weekly cadence. The result: when your daily note shows today's tasks, it's not just a random to-do list. It's a mix of life maintenance from your areas (clean, pay bills, exercise) and meaningful progress toward your projects' finish lines.

You don't have to think about which project needs attention today. The plan already broke it down into steps. Todoist already scheduled them. The daily note just shows you what's due. Complete the list and you've both kept your life running and moved your projects forward.

Claude is what connects all of this. One skill can read a file in Obsidian, create a task in Todoist, search Gmail, and generate a PDF — all in a single invocation. Without Claude, these are separate tools you manage by hand. With Claude, one command touches all of them.

The `/new-project` skill is the clearest example. You answer a short questionnaire about your goal, milestones, and deadline. Claude creates the Obsidian folder (README + MOC), the Todoist project (with milestones as scheduled tasks), a file sync folder, and updates the project registry. One command, four systems, zero manual setup. The project is immediately plannable, and its tasks start appearing in your daily notes the next morning.

### Project-specific skills

Skills have an optional `project` field in their frontmatter that ties them to a specific project. Universal skills — daily-note, close-day, load — have no project tag and stick around forever. Project-specific skills are tagged to their project and do the specialized work.

A job search project might have a skill that takes a posting URL, reads your resume templates from the vault, generates tailored application materials, creates a Todoist task, and uploads everything to file sync — one command spanning three tools. Another skill might scan Gmail for status updates from every pending company and sync the results back into a tracker in the vault.

A fitness project might have a skill that generates weekly meal plans, or one that reads your daily note frontmatter and produces a progress report.

When a project is done and archived, its skills move to a skills archive too. The system doesn't accumulate dead automation. It stays clean as projects come and go.

Here's what a skill file looks like:

```markdown
---
name: weekly-review
description: Scan email for updates, sync tracker, produce stats
project: My Project
allowed-tools: Read, Edit, Gmail, Todoist
---

## Steps

1. Search Gmail for emails from all pending companies
2. Update the tracker with any status changes
3. Calculate statistics from the tracker
4. Produce a report with recommendations
```

Claude reads the instructions and executes them using the tools listed in `allowed-tools`. Skills can call MCP servers, read and write files, and even spawn sub-agents to parallelize work. The instructions are natural language. If a skill isn't doing what you want, you open it and rewrite a sentence.

---

## Loading Context for Deep Work

Claude Code conversations have a context window — a limit on how much text the model can hold at once. If you've been chatting for a while, the window fills up with old tool results, previous file reads, and conversation that isn't relevant to what you want to do next.

The `/load` skill solves this. When I type `/load fitness` or `/load side-project`, it:

1. **Compacts the conversation.** Everything so far gets summarized into a short digest, freeing up the context window.
2. **Finds the folder.** Fuzzy-matches the name against all projects and areas.
3. **Reads the README and MOC.** Just those two files — the goal, the workflow, and the index of everything in the folder.
4. **Looks up the Todoist project ID** so it can create tasks, check due dates, or pull project status without searching.
5. **Presents a summary** and asks what to work on.

The key insight is what it doesn't do: it doesn't read every file in the folder. A project might have dozens of notes, templates, and reference documents. Reading all of them would blow the context window before you've done any actual work. Instead, `/load` gives Claude just enough to understand the project — its goal, structure, and where things live — and then you direct it to the specific files you need.

This means you can switch projects mid-conversation. Finish updating your meal plan, type `/load side-project`, and Claude has full context on your codebase without any of the meal planning noise. The conversation feels like opening a new tab, but Claude still has its memory and preferences intact.

The README + MOC pattern is what makes this work. Because every project has the same two entry points, the skill doesn't need project-specific logic. It's one generic skill that works for every folder in the vault. And because the MOC is an index with a one-line description for each file, Claude can suggest which files to read next without guessing.

---

## The Full Skill Set

| Skill | Purpose |
|-------|---------|
| `/daily-note` | Morning sync: Todoist + Calendar + meals into the daily note |
| `/close-day` | Evening sync: daily note checkboxes back to Todoist |
| `/load <name>` | Switch context to a project or area for focused work |
| `/new-project` | Interactive setup: creates Obsidian folder, Todoist project, file sync folder, updates the registry |
| `/triage-inbox` | Sort inbox files into the right PARA category or flag for deletion |

Plus any project-specific skills you build as needed.

The skills connect through shared conventions rather than tight coupling. `/new-project` creates the folder structure that `/load` knows how to read. `/daily-note` and `/close-day` are bookends of the same sync cycle. The connective tissue is just the PARA folder structure, Todoist project IDs, and the daily note format. No skill needs to know how another skill works — they just need to follow the same conventions.

---

## The Memory Layer

Claude Code has a persistent memory system — files on disk that survive across conversations. When I correct Claude ("don't list meal options, just pick one") or give it context about my setup, it saves that as a memory file. Next conversation, it reads the memory index and adjusts its behavior.

This means the system improves over time. Every preference I express, every correction I make, compounds. I'm not re-training the model. I'm building up a profile that future conversations load automatically. Six months from now, this system will know how I work better than any tool I've used.

What gets stored: preferences, corrections, project context, links to external systems. What doesn't: anything derivable from the codebase, git history, or the project instruction file. No redundancy.

And everything is plain text. Memory files are markdown with YAML frontmatter. You can open them, read them, edit them, delete them. If Claude saved a preference you've changed your mind about, just edit the file. There's no opaque database — the memory index is a markdown file listing links to other markdown files. Full transparency, full control.

---

## The Integrations

The technical backbone is MCP. Here's what's connected:

**Todoist MCP:** The heaviest integration. Full task and project management — create, update, complete, reschedule, search by date, bulk operations. 50+ available tools. This is the backend database for everything task-related.

**Google Calendar MCP:** Pulls events for daily notes. Read-only.

**Gmail MCP:** Searches and reads emails. Skills can scan for updates from specific senders or subjects — useful for any project that involves waiting on external responses.

**Obsidian CLI:** Vault operations from the command line. Search, note creation, plugin management.

You could add more. There are MCP servers for Slack, GitHub, Linear, Notion, and most tools with an API. Each one you connect gives Claude another data source to pull from and another system to push updates to.

### Neovim as the editor

I don't use Obsidian's built-in editor. The vault is a folder of markdown files, so any editor works. I use Neovim with two plugins:

**obsidian.nvim** gives me keybindings for the vault. `<leader>ot` opens today's daily note (creating it from the template if it doesn't exist). `<leader>oy` and `<leader>om` jump to yesterday and tomorrow. `<leader>os` does a Telescope-powered full-text search across every note. `<leader>ob` shows backlinks — what other notes link to this one. `<leader>ox` toggles checkboxes through the bullet journal states, rendered with nerd font icons in the buffer.

**autolist.nvim** makes bullet journaling frictionless. Hit Enter and the next bullet appears. Tab indents, Shift-Tab outdents. Lists auto-format as you type.

The editing experience is fast, keyboard-driven, and lives in the terminal right next to Claude Code. I run a split — Neovim on one side, Claude on the other. I'm editing the daily note while Claude generates materials or syncs data in the adjacent pane.

### It's all plain text

The entire system is plain text. Skills are markdown files. Memory is markdown files. The project registry is a markdown file. Daily notes, meal plans, trackers — all markdown. Nothing is locked in a proprietary format or hidden behind a UI.

You can read every piece of the system, understand exactly what it does, and change anything with a text editor. If a skill isn't working right, open it and rewrite the instructions in English. If the daily note template needs a new section, edit the template file. The AI is powerful, but the human is always in control.

Because it's all plain text, the tools are swappable. I use Obsidian and Todoist because they give me mobile sync — I can check my daily note and manage tasks from my phone. But the vault is just a folder of markdown files. If you didn't need mobile access, you could use any text editor and let Claude handle the things Obsidian provides: templating, backlinking, search, organization. Swap Todoist for a plain text task file and write a skill that manages it. The system isn't married to any app. The apps are just convenient interfaces on top of the real thing: a folder of text files and an AI that knows how to work with them.

---

## Setting This Up Yourself

The bones of this system are simple:

1. **An Obsidian vault with PARA folders.** Projects, Areas, Resources, Archives. Every folder gets a README and MOC.

2. **A Todoist account with matching projects.** One Todoist project per vault folder. Color-code them however you want.

3. **A `CLAUDE.md` file.** This is the most important piece. It's a project-level instruction file that Claude reads at the start of every conversation. It tells Claude the structure of your vault, the mapping between folders and Todoist projects, and any conventions to follow. This is how Claude knows what everything is without you explaining it each time.

4. **Claude Code with MCP servers.** Install the Todoist and Google Calendar MCP servers at minimum. Gmail if you want email scanning. The MCP setup is the most technical part — you're configuring API credentials and server connections — but it's a one-time cost.

5. **The daily note cycle.** Build two skills: one that pulls tasks, events, and whatever else you track into a daily note (morning), and one that reads checkbox state and pushes changes back (evening). These are the core loop.

6. **A daily note template.** Store it in a templates folder so the morning skill can create new notes from it. Update the template once and every future note picks up the changes.

7. **Project-specific skills as you find them.** What do you do repeatedly that takes too long? Write a skill for it. Start with the daily cycle and add automation as you discover the friction points.

---

## Why This Works

**Separation of concerns.** Obsidian is for thinking — notes, plans, reflections. Todoist is for doing — tasks, deadlines, recurring work. The daily note is just a view that joins them. They never compete for authority.

**Convention over configuration.** Every project has a README and MOC. Every Todoist project has a color code. Every daily note has the same sections. Skills don't need complex logic to find things because everything is in a predictable place.

**Decisions, not options.** The system picks your meals, chooses your templates, schedules your rotations. You make the high-level calls — which projects to pursue, what to work on today. The machine handles the rest.

**Compounding memory.** Most AI assistant setups are stateless. Every conversation starts from zero. This one remembers. Corrections stick. Preferences accumulate. The system gets better over time without you re-explaining things.

**Minimal surfaces.** One file in the morning. Checkboxes during the day. One sync at night. Everything else is invisible infrastructure. The best productivity system is the one you actually use, and the easiest one to use is the one with the fewest places to look.
