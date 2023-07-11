const getAllNotams = async () => {
  var notams = [];
  await fetch("http://localhost:5002/notams/getAll", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    //   body: JSON.stringify({
    //     searchword}
    .then((response) => response.json())
    .then((data) => {
      notams = data;
    })
    .catch((error) => {
      console.error(error);
    });
  return notams;
};

//add notam
const addNotam = (newNotam) => {
  fetch("http://localhost:5002/notams/addNotam", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: newNotam,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(error);
    });
};
//update notam
const updateNotam = (ntm) => {
  fetch(`http://localhost:5002/notams/${ntm.num_notam}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: ntm,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(error);
    });
};
//delete notam
const deleteNotam = (num_ntm) => {
  fetch(`http://localhost:5002/notams/${num_ntm}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(error);
    });
};
//delete multiple
const deleteMultipleNotams = async (notamNumbers) => {
  try {
    const deletionPromises = notamNumbers.map(async (num_notam) => {
      await fetch(`http://localhost:5002/notams/${num_notam}`, {
        method: "DELETE",
      });
    });

    await Promise.all(deletionPromises);
    getAllNotams();
  } catch (error) {
    console.error("Error deleting notams:", error);
  }
};

const button = document.getElementById("myBTN");
const form = document.getElementById("myForm");
const trigger = document.getElementById("addNotam");
const formData = new FormData(form);
const getTrigger = document.getElementById("getTrigger");
const container = document.getElementById("notamsTable");
const notamsInput = document.getElementById("notamsCode");
const searchButton = document.getElementById("searchButton");
var searchword = "";

const notamsToShow = (notams) => {
  console.log("notams : ", notams);
  // Create table element
  var table = document.createElement("table");
  // Add class and style attributes to the table
  table.className = "table table-striped";
  table.style.height = "200px";
  table.style.overflowY = "scroll";
  table.id = "mytable";
  // Create thead element
  var thead = document.createElement("thead");

  // Create tr element for thead
  var trHead = document.createElement("tr");

  // Create th element for thead
  var th = document.createElement("th");
  th.textContent = "NOTAM's List";

  // Append th to trHead
  trHead.appendChild(th);

  // Append trHead to thead
  thead.appendChild(trHead);
  // Create tbody element
  var tbody = document.createElement("tbody");

  notams.map((notam) => {
    // Create tr element for tbody
    var trBody = document.createElement("tr");

    // Create td element for tbody
    var td = document.createElement("td");
    var singleNotam = document.createElement("div");
    // Set the content of td
    singleNotam.innerHTML = ` <p class='num-notam'>${notam.num_notam}</p><br/>
  Q) ${notam.champs_q}<br />
  A) ${notam.champs_a}<br />
  B) ${notam.champs_b}<br />
  C) ${notam.champs_c}<br />
  D)${notam.champs_d}<br />
  E)${notam.champs_e}<br />
  F)${notam.champs_f}<br />
  G)${notam.champs_g}`;

    // Create checkbox input element
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.classList.add("checkbox"); // Add the 'checkbox' class to the checkbox input element

    td.appendChild(checkbox);
    td.appendChild(singleNotam);

    // Append td to trBody
    trBody.appendChild(td);

    // Append trBody to tbody
    tbody.appendChild(trBody);
  });
  // Append thead and tbody to the table
  table.appendChild(thead);
  table.appendChild(tbody);

  // Append the table to the document body or any desired element
  container.appendChild(table);
};

notamsInput.addEventListener("change", (e) => {
  e.preventDefault();
  searchword = e.target.value;
});
searchButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const notams = await getAllNotams();
  const searchedNotam = notams.filter((notam) =>
    notam.num_notam.includes(searchword)
  );
  if (searchedNotam.length === 0) {
    console.log("not found");
    var notFound = document.createElement("p");
    notFound.innerHTML = "There is no such Notam ! ";
    container.innerHTML = "";
    container.appendChild(notFound);
  } else {
    container.innerHTML = "";
    notamsToShow(searchedNotam);
  }
});
const deleteButton = document.getElementById("deleteButton");

// Add event listener to the delete button
deleteButton.addEventListener("click", async (e) => {
  e.preventDefault();
  deleteMultipleNotams(getSelectedNumNtm());
});

getTrigger.addEventListener("click", async (e) => {
  e.preventDefault();
  const notams = await getAllNotams();
  container.innerHTML = "";
  notamsToShow(notams);
});
function getSelectedNumNtm() {
  var selectedNumNtm = [];
  var table = document.getElementById("mytable");

  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    var checkbox = row.getElementsByTagName("input")[0];

    if (checkbox && checkbox.checked) {
      var numNtmElement = row.querySelector(".num-notam");
      var numNtm = numNtmElement.innerText.trim();
      selectedNumNtm.push(numNtm);
    }
  }

  return selectedNumNtm;
}
form.addEventListener("change", (e) => {
  formData.set(e.target.name, e.target.value);
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const jsonObject = {};

  for (let [key, value] of formData) {
    jsonObject[key] = value;
  }
  const jsonData = JSON.stringify(jsonObject);
  console.log(jsonData);
  addNotam(jsonData);
  form.reset();
});
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const jsonObject = {};

//   for (let [key, value] of formData) {
//     jsonObject[key] = value;
//   }
//   const jsonData = JSON.stringify(jsonObject);
//   addNotam(jsonData);
// });

//shapes
