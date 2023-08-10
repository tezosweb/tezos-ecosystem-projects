![Tezos Ecosystem Projects](TezosEcosystem.png)

This repository serves as the source for the Tezos Ecosystem page at https://tezos.com/ecosystem.

# Contributions

Project submissions must contain two files: a Markdown document and a logo. In order to add a new project:

1. Create a new [Markdown file](#example) with all project information in the `projects` folder.
2. Add a [logo image](#logos) to the `logos` folder.
3. Submit a Pull Request (PR) to the `main` branch for review.

If you are adding more than one project, please submit each as separate PRs.

If you need to update your project information or logo, please update your existing files and submit a new PR.

## Example

```txt
---
slug: "projectname"
date: "2022-01-20"
project: "Project Name"
logline: "A short one-sentence description of projectname."
logo: "projectname.svg"
tags: "defi,community"
status: "active"
website: "https://projectname.com/"
twitter: "https://twitter.com/projectname"
---

A full description of your project can be inserted here.

One or two paragraphs is ideal.
```

A `template.md` file has been provided for your convenience in this project's root folder. You may copy it to the `projects` folder, rename the new file, and add your information.

The following fields are required in the Markdown frontmatter:

|field|description|
|-|-|
|`slug`|page URL for your project at `tezos.com/ecosystem/slug`|
|`date`|date of project addition or most recent update in `YYYY-MM-DD` format|
|`project`|name of your project|
|`logline`|one-sentence project description|
|`logo`|your project's logo file name and extension (must match the image filename added to the `logos` folder)|
|`tags`|comma-separated list of zero or more tags that apply to your project. Please only include tags from the [list below](#tags).|
|`status`|one of the following only: `under construction`, `active`, or `inactive`|
|`website`|project website URL, including HTTP/HTTPS|
|`twitter`|*(optional)* project Twitter URL, including HTTPS|

_Note: If any of your text in the above fields includes an escape character, please unescape._

Twitter URLs must start `https://twitter.com/` - please do not use `x.com` or other alternatives. Delete the whole `twitter:` line if you do not have a Twitter account.

Please include a one to two paragraph description below the three dashes – these descriptions will be featured on your dedicated project page.

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

All images should be roughly 500x500px. `.svg` is preferred but a 24-bit transparent `.png` is also an option. `.jpg` or `.jpeg` can be used if there is no alternative. Logos appear in the cards on `https://tezos.com/ecosystem` and on each individual project's page. Please size accordingly.
