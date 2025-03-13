---
title: 'Post with a video '
description: "This starter uses Justin Ribeiro's lite-youtube web component. Add `youtube: true` to frontmatter to activate."
date: 2022-10-31
tags:
  - youtube
  - feature
---

This starter uses a [webC version](https://github.com/zachleat/zachleat.com/blob/main/_components/youtube-lite-player.webc) of Paul Irish's [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed).

<div>
<custom-youtube @slug="Ah6je_bBSH8" @label="Alberto Ballesteros - Artista Sin Obra"></custom-youtube>
</div>


A modified version to display [PeerTube](https://joinpeertube.org/) videos is also included. It works similarly, but takes two extra arguments:
- `@instance`: The instance hosting the video.
- `@embed-slug` The slug used for video embedding.

<div>
<custom-peertube @instance="fair.tube" @slug="8opkviMc2iDUYMwJzG1FQ4" @embed-slug="3bd0b70e-7890-4216-a123-2052363645ff" @label='Back at the Herperduin 💦 - 28/09/2024'></custom-peertube>
</div>
