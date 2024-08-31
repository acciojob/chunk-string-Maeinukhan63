function stringChop(str, size) {
  // your code here
	 if (!str || size <= 0) {
        return [];
    }

    // Initialize an array to store the chunks
    let chunks = [];

    // Loop through the string and slice it into chunks of the given size
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
