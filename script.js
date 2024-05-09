const PACKAGE_DURATIONS = {
  1: 7,
  2: 15,
  3: 30,
};

document
  .getElementById("subscriptionButton")
  .addEventListener("click", function () {
    var packageOptions = document.getElementById("packageOptions");
    var selectedPackage = packageOptions.value;

    var days = PACKAGE_DURATIONS[selectedPackage] || 0;

    if (days > 0) {
      var today = new Date();
      var startDateString = prompt(
        "Enter the start date for the subscription (YYYY-MM-DD):",
        today.toISOString().slice(0, 10)
      );
      var startDate = new Date(startDateString);

      if (
        isValidDate(startDate) &&
        startDateString.match(/^\d{4}-\d{2}-\d{2}$/)
      ) {
        var expirationDate = new Date(
          startDate.getTime() + days * 24 * 60 * 60 * 1000
        );
        alert(
          "Your subscription will expire on " + expirationDate.toDateString()
        );
      } else {
        alert("Please enter a valid start date in the format YYYY-MM-DD.");
      }
    } else {
      alert("Please select a package.");
    }
  });

function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}
