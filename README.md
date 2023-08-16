![Tezos Ecosystem Projects](TezosEcosystem.png)

This repository serves as the source for the Tezos Ecosystem page at https://tezos.com/ecosystem.

# Contributions

Project submissions must contain two files: a markdown document and a logo. In order to add a new project:

1. Create a new [markdown file](#example) with all project information in the `projects` folder. The filename can use alphanumeric or dash characters, e.g. `project-name.md`.

2. Add a [logo image](#logos) to the `logos` folder. Use the same main filename, e.g. `project-name.svg`.

3. Submit a Pull Request (PR) to the `main` branch for review.

If you are adding more than one project, please submit each as a separate PR.

If you want to update your project information or logo, please update your existing files and submit a new PR.

If you want to permanently delete your project, please delete your existing files and submit a new PR.

## Example

```txt
---
slug: "project-name"
date: "2022-01-20"
project: "Project Name"
logline: "A short one-sentence description of Project Name."
logo: "project-name.svg"
tags: "defi,community"
status: "active"
website: "https://project-name.com/"
twitter: "https://twitter.com/projectname"
---

A full description of your project can be inserted here.

One or two paragraphs is ideal.
```

A `template.md` file has been provided for your convenience in this project's root folder. You may copy it to the `projects` folder, rename the file to your project's name (e.g. `project-name.md`), and add your information.

The following fields are required in the Markdown frontmatter:

|field|description|
|-|-|
|`slug`|path URI for your project at `tezos.com/ecosystem/<slug>`. Use only alphanumeric and dash characters|
|`date`|date of project addition or most recent update in `YYYY-MM-DD` format|
|`project`|name of your project|
|`logline`|a short one-sentence project description|
|`logo`|your project's logo file name and extension. It must match the image filename added to the `logos` folder.|
|`tags`|comma-separated list of zero or more tags that apply to your project. Please only include tags from the [list below](#tags).|
|`status`|either `active` or `inactive`|
|`website`|project website URL, including HTTP/HTTPS|
|`twitter`|*(optional)* project Twitter URL, including HTTPS|

_Note: If any of your text in the above fields includes an escape character, please unescape._

Live projects must set an `active` status. Set `inactive` if you want to temporarily remove your project from the ecosystem with the intention of re-activating it later.

Twitter URLs must start `https://twitter.com/` - please do not use `x.com` or other alternatives. Delete the whole `twitter:` line if you do not have a Twitter account.

Please include a one to two paragraph description below the frontmatter's final three dashes. The text will be featured on your dedicated project page.

### Tags

The following are the currently available project tags:

```
blockexplorers
baking
community
defi
devtools
nft
gaming
did
stablecoins
```

Please use only these tags and watch out for typos. Excluding tags is also an option.

## Logos

All images should use the same project filename (e.g. `project-name.svg`) and be scalable to 500 x 500px.

`.svg` format is preferred but a 24-bit transparent `.png` is also an option. `.jpg` or `.jpeg` can be used if there is no alternative. Logos appear in the cards on `https://tezos.com/ecosystem` and on each individual project's page. Please size accordingly.
