// Get the list items with checkmarks and count them
const statesList = document.getElementById('statesList');
const countElement = document.getElementById('count');
const checkmark = String.fromCharCode(10004); // Unicode character for checkmark

// Function to count the number of states visited
function countStatesVisited() {
    const listItems = statesList.querySelectorAll('li');
    let count = 0;
    listItems.forEach((item) => {
        if (item.innerHTML.includes(checkmark)) {
            count++;
        }
    });
    return count;
}

// Update the count on the webpage
function updateCount() {
    const count = countStatesVisited();
    countElement.textContent = count;
}

// Call updateCount() initially to show the count on page load
updateCount();

// Optionally, you can add an event listener to update the count when the list items are changed dynamically
statesList.addEventListener('change', updateCount);
