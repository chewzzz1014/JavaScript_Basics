//  converts a string title and returns the hyphenated version for the URL.
function urlSlug(title) {
  let r = title.trim().split(/\W+/).map((ele)=> ele.toLowerCase()).join("-")
  console.log(r)
  return r
}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
