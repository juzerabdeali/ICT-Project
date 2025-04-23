document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("signupSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  showMenu();
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("selectRestaurantSection").style.display = "block";
});

function showSignup() {
  document.getElementById("welcomeSection").style.display = "none";
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("signupSection").style.display = "block";
}

function showLogin() {
  document.getElementById("welcomeSection").style.display = "none";
  document.getElementById("signupSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

function showMenu() {
  var selectedRestaurant = document.getElementById("restaurant").value;
  document.getElementById("selectRestaurantSection").style.display = "none";

  // Display the selected restaurant's menu
  var menuSectionId = selectedRestaurant + "MenuSection";
  var selectedMenuSection = document.getElementById(menuSectionId);

  // Hide all menu sections first
  var allMenuSections = document.querySelectorAll(".menu-section");
  for (var i = 0; i < allMenuSections.length; i++) {
    allMenuSections[i].style.display = "none";
  }

  // Display the selected menu section
  if (selectedMenuSection) {
    selectedMenuSection.style.display = "block";
  } else {
    console.error(
      "Menu section not found for restaurant: " + selectedRestaurant
    );
  }
}

function addToOrder(restaurant) {
  var selectedItems = document.querySelectorAll(
    'input[name="menuItems"]:checked'
  );
  var orderSummaryTable = document.getElementById("orderSummaryTable");
  var totalPrice = 0;

  // Clear previous entries
  orderSummaryTable.innerHTML = "";

  // Add selected items to order summary
  for (var i = 0; i < selectedItems.length; i++) {
    var itemName =
      selectedItems[
        i
      ].parentElement.previousElementSibling.previousElementSibling.innerText.trim();
    var itemPrice = parseFloat(selectedItems[i].getAttribute("data-price"));

    var row = orderSummaryTable.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = itemName;
    cell2.innerHTML = "Rs. " + itemPrice.toFixed(2);

    totalPrice += itemPrice;
  }

  // Display the total price
  var totalRow = orderSummaryTable.insertRow();
  var totalCell1 = totalRow.insertCell(0);
  var totalCell2 = totalRow.insertCell(1);

  totalCell1.innerHTML = "<b>Total</b>";
  totalCell2.innerHTML = "<b>Rs. " + totalPrice.toFixed(2) + "</b>";

  // Show the order summary section
  document.getElementById("orderSummarySection").style.display = "block";
  alert("Scroll Down for Order Summary.");
}

function placeOrder() {
  alert(
    "Order placed successfully! Collect your order from the restaurant counter."
  );
}
