async function fetchFacts() {
  const response = await fetch("src/data/facts.json");
  const data = await response.json();
  return data.facts;
}

function displayFact(fact, factParagraph) {
  factParagraph.innerHTML = ""; // Clear the element first

  function typeWriter(i = 0) {
    const speed = 50;
    if (i < fact.length) {
      factParagraph.innerHTML += fact.charAt(i);
      setTimeout(() => typeWriter(i + 1), speed);
    }
  }
  typeWriter();
}

async function main() {
  const facts = await fetchFacts();
  console.log("facts", facts);

  const factParagraph = document.getElementById("fact");
  const nextFactBtn = document.getElementById("nextFactBtn");

  let currentIndex = Math.floor(Math.random() * facts.length);

  // Display the first fact
  displayFact(facts[currentIndex].fact, factParagraph);

  // Add click event listener to the button
  nextFactBtn.addEventListener("click", () => {
    window.location.reload();
  });
}

main();
