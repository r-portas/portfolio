const { join } = require("path")
const { readFileSync, writeFileSync } = require("fs")
const { prompt } = require("inquirer")
const { format } = require("date-fns")

function generateTemplate(title, date) {
  let template = readFileSync(join(__dirname, "./util/post.template"), {
    encoding: "utf-8",
  })
  template = template.replace("{{ title }}", title).replace("{{ date }}", date)
  return template
}

async function main() {
  try {
    const result = await prompt([
      {
        type: "input",
        name: "title",
        message: "Title of the post, as displayed on the page",
      },
      {
        type: "input",
        name: "urlSuffix",
        message: "URL suffix, will generate 'YYYY-MM-DD-{urlSuffix}'",
      },
    ])

    const now = new Date()
    const postDate = format(now, "yyyy-MM-dd")

    const template = generateTemplate(result.title, postDate)
    const filename = `${postDate}-${result.urlSuffix}.mdx`

    const newFilePath = join(__dirname, "..", "content", "posts", filename)

    writeFileSync(newFilePath, template)
    console.log(`Successfully created ${filename}`)
  } catch (error) {
    if (error.isTtyError) {
      console.error("Terminal is not supported")
    } else {
      console.error(error)
    }
  }
}

main()
