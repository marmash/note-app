# Note App

*Simple markdown friendly note app where you can add, edit and delete your notes.*

## Markdown rendering

Markdown is rendered by [react-markdown](https://github.com/remarkjs/react-markdown) with [remark-gfm](https://github.com/remarkjs/remark-gfm) plugin for autolinks, strikethrough, tables and tasklists. In edit mode your notes are visible as its raw version.

## Storage

All your notes are saved in raw form to local storage of your current browser. There is no authentication or database connected to the app so be cautious and **DO NOT** store any sensitive data.
