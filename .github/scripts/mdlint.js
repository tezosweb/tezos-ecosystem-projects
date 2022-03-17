const frontmatter = require('@github-docs/frontmatter');

fs = require('fs');

if (typeof process.argv[2] === 'undefined') {
    console.error("Markdown file name not provided");
    process.exit(1);
}
function tryread() {
    try {
	return fs.readFileSync(process.argv[2]).toString();
    } catch(e) {
	console.error("Could not read markdown file");
	console.error(e);
	process.exit(2);
    }
}
const markdown = tryread();

console.log(markdown);
const schema = {
  properties: {
    slug: {
	type: 'string',
	pattern: /^[a-zA-Z0-9\-]+$/,
	message: "ERROR: 'slug' must be a website slug with only alpha-numeric characters or dashes",
	required: true,
	allowEmpty: false
    },
    date: {
	type: 'string',
	pattern: /^[0-9\-\/]+$/,
	conform: function (v) {
	    if (v.match(/^[0-9]+[\/\-][0-9]+[\/\-][0-9]+$/i)) {
		return (new Date(v) != "Invalid Date");
	    }
	    return false;
	},
	message: "ERROR: 'date' must specify a valid date, including year, month and day, preferably in YYYY-MM-DD format",
	required: true,
	allowEmpty: false
    },
    project: {
	type: 'string',
	required: true,
	message: "ERROR: 'project' must specify the project name",
	allowEmpty: false
    },
    logline: {
	type: 'string',
	required: true,
	maxLength: 140,
	message: "ERROR: 'logline' is a required string of at most 140 characters",
	allowEmpty: false
    },
    logo: {
	type: 'string',
	message: "'logo' should specify an image with an alphanumeric filename, .png, .svg, .jpg or .jpeg suffix, and should be in logos folder",
	// change back to pattern
	conform: function (v) {
	    if (v.match(/^[a-zA-Z0-9\-\_\+\&\@\:]+\.(png|svg|jpg|jpeg)$/i)) {
		return fs.existsSync("logos/" + v);
	    }
	    return false;
	},
	message: "WARNING: No matching logo was found, or filename contained unexpected characters",
	required: true,
    },
    tags: {
	type: 'string',
	pattern: /^((blockexplorers|baking|community|defi|devtools|nft|gaming|did|stablecoins)(,\s*(blockexplorers|baking|community|defi|devtools|nft|gaming|did|stablecoins))*)?$/,
	message: "ERROR: 'tags' must contain zero, one or more tags from approved list only, separated by commas",
	required: true,
	allowEmpty: true
    },
    status: {
	type: 'string',
	enum: ["active", "inactive", "under construction"],
	required: true,
	message: "ERROR: 'status' must be present and one of ('active', 'inactive', or 'under construction')",
	allowEmpty: false
    },
    website: {
	type: 'string',
	format: 'url',
	required: true,
	message: "ERROR: 'website' must specify a URL",
	allowEmpty: false
    },
    twitter: {
	type: 'string',
	pattern: /twitter.com/,
	format: 'url',
	message: "ERROR: Please include project 'twitter' with the full twitter.com URL and the project twitter handle"
    }
  }
}

const { data, content, errors } = frontmatter(markdown, { schema })
console.log("Errors: ", errors)
console.log("Data: ", data)
console.log("Content: ", content)



