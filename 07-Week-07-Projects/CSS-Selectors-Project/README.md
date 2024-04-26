Practice: CSS Selectors
Now, it's time to practice your understanding of the most common selectors in CSS. The majority of the CSS for this web page has been created by another developer. Your mission is to make some improvements requested by the customer.

Set up
Clone the practice from the starter.
Run npm install to install dependencies.
Run npm run test to run Cypress tests after completing each phase.
Once you're in VS Code, you can drag the index.html file into your browser to view the webpage, or use the File Explorer to open it in your browser. The only file you will need to edit for this practice is main.css.

Remember to save the CSS file and refresh the page in the browser whenever you make changes.

Background and Context
You will begin with a web page that has all of the HTML and most of the CSS completed. You only need to write CSS, not HTML, to complete each phase.

You may use the CSS selector documentation for reference as you complete these tasks.

To determine the best CSS Selector for each request, you may either look at the HTML file (index.html), or use the element inspector in your browser's Developer Tools.

Cypress tests are provided to confirm that your CSS generates the correct styling. However, the tests do not confirm that you used the most appropriate CSS selectors to accomplish the correct styling. Pay close attention to the heading in each phase to make sure you are using the appropriate selectors for that phase.

Phase 1 - Select by id
Find the title that appears between the cover image (textured paper), and the introduction page (outlined table). Make this title bold without modifying the other titles on the web page.

https://camo.githubusercontent.com/07227d9f8cbb1796f340dc861dbcc64bdff8d9c9ef189a0848e9671ef2cf9739/68747470733a2f2f61707061636164656d792d6f70656e2d6173736574732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f4d6f64756c61722d437572726963756c756d2f636f6e74656e742f7765656b2d30372f70726163746963652d6373732d73656c6563746f72732f7068617365312e706e67

Phase 2 - Select by class name
Next, find the page numbers that appear in square brackets throughout the story. These need to display on the right-hand edge of the screen.

https://camo.githubusercontent.com/c2792b3e0622613aec7f09dfeb9841d75074261a56925853df0f96cc33a9e71d/68747470733a2f2f61707061636164656d792d6f70656e2d6173736574732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f4d6f64756c61722d437572726963756c756d2f636f6e74656e742f7765656b2d30372f70726163746963652d6373732d73656c6563746f72732f7068617365322e706e67

Hint: The original developer assigned a class to each <span> tag which displays a page number.

The designer suggests the following settings as shown in the mockup below.

    position: absolute;
    right: 10px;
    font-size: small;
Mockup of expected result

https://camo.githubusercontent.com/c3293c9e5ad21ee5875012b71316189c870e4a8759638882b68460937f94ded2/68747470733a2f2f61707061636164656d792d6f70656e2d6173736574732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f4d6f64756c61722d437572726963756c756d2f636f6e74656e742f7765656b2d30372f70726163746963652d6373732d73656c6563746f72732f7068617365322d61667465722e706e67

Phase 3 - Select by type
First, clean up the ragged right-hand edge on each paragraph (<p>) by making it justified like a printed book (text-align: justify;).

Second, reduce the space between paragraphs, so it is a little less than a single line. The designer recommends .75em for the top and bottom margins.

https://camo.githubusercontent.com/4709e895fbdcde4b0497855e8ab762c1cdaae2e0cce47e7aba81c8f7841d33a9/68747470733a2f2f61707061636164656d792d6f70656e2d6173736574732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f4d6f64756c61722d437572726963756c756d2f636f6e74656e742f7765656b2d30372f70726163746963652d6373732d73656c6563746f72732f706861736533612e706e67

Third, horizontally center the introduction and closing sections which appear before and after the story. (Hint: One way to center content is to think about your margins.)

Fourth, please give them significant extra space before and after (100px), so they stand apart from the story itself.

These two sections were placed within a <pre> tag by the original developer. This means they are preformatted, so spaces and line breaks are respected by the browser instead of being removed/hidden (like in "normal" paragraphs). The side effect is that they can look offset to the left and give a less-polished feel to the reader.

https://camo.githubusercontent.com/531c78439e7e803f5e2894df45a702f5c400dd0ba00cdb61d7d942c7d9a0ffd2/68747470733a2f2f61707061636164656d792d6f70656e2d6173736574732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f4d6f64756c61722d437572726963756c756d2f636f6e74656e742f7765656b2d30372f70726163746963652d6373732d73656c6563746f72732f706861736533622e706e67

Hint: To use the width of the provided content as the width of an area, consider using width: fit-content. Centering elements on a page can be done using a variation of margin: auto.

Phase 4 - Select by state or pseudo-class
Please hide the underlines on the links throughout the page. If it's helpful, you can review the documentation on pseudo classes in CSS.

https://camo.githubusercontent.com/a277fca1cee8de6fba1957b5fd8e57b8c5d43b716d91f4aa56a459ded793d08c/68747470733a2f2f61707061636164656d792d6f70656e2d6173736574732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f4d6f64756c61722d437572726963756c756d2f636f6e74656e742f7765656b2d30372f70726163746963652d6373732d73656c6563746f72732f7068617365342e706e67

Bonus Phase - Hover state and child combinators
Note: There are no tests for this phase.

While continuing to hide the underlines on links in default or visited states, show the underline and make the link text bold when the user hovers their mouse over each link. This should apply to all links on the page (see the introduction, table of contents, and closing sections). The designer created this mockup to show the desired effect.

https://camo.githubusercontent.com/af47bde50af279bfb8890df11aa96b87ae8505405092ff6a5617d4b9a93a2568/68747470733a2f2f61707061636164656d792d6f70656e2d6173736574732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f4d6f64756c61722d437572726963756c756d2f636f6e74656e742f7765656b2d30372f70726163746963652d6373732d73656c6563746f72732f706861736535612e706e67

Finally, for the links in the introduction and closing sections (the <pre> blocks), please make all the links show as black text in all states.

https://camo.githubusercontent.com/213563ef8be8b9ac82440a43ef897236c5e04cfbea026163ebb9cc79b69d54f1/68747470733a2f2f61707061636164656d792d6f70656e2d6173736574732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f4d6f64756c61722d437572726963756c756d2f636f6e74656e742f7765656b2d30372f70726163746963652d6373732d73656c6563746f72732f706861736535622e706e67

Hint: Review the child combinator selectors, if you get stuck.

What you've learned
You practiced multiple ways to adjust HTML elements using CSS selectors

id
class
type
state (a.k.a. pseudo-class)
child combinators
