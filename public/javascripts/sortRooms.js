const sortPriceBtn = document.querySelector('.sort-price-btn');
const searchInput = document.querySelector('.search-input');
const matchedRooms = []; 

sortPriceBtn.addEventListener('click', () => {
  const sortedRooms = quicksort(roomsData);
  displayRooms(sortedRooms);
});

searchInput.addEventListener('input', () => {
  const pat = searchInput.value;
  matchedRooms.length = 0; 
  KMPSearch(pat, roomsData);
  displayRooms(matchedRooms);
});

console.log(JSON.stringify(roomsData.map(room => room.location)));

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex].Price.price; // Consider the price from the separate table
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i].Price.price < pivot) { // Compare with the price from the separate table
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), arr[pivotIndex], ...quicksort(right)];
}


function computeLPSArray(pat, M, lps) {

  var len = 0;
  var i = 1;
  lps[0] = 0; 

  while (i < M) {
    if (pat.charAt(i) == pat.charAt(len)) {
      len++;
      lps[i] = len;
      i++;
    }
    else 
    {

      if (len != 0) {
        len = lps[len - 1];

      }
      else 
      {
        lps[i] = len;
        i++;
      }
    }
  }
}

function KMPSearch(pat, rooms) {
  rooms.forEach(function(room) {
    var txt = JSON.stringify(room);
    var M = pat.length;
    var N = txt.length;

    var lps = [];
    var j = 0;

    computeLPSArray(pat, M, lps);

    var i = 0;
    while ((N - i) >= (M - j)) {
      if (pat.charAt(j) == txt.charAt(i)) {
        j++;
        i++;
      }
      if (j == M) {
        matchedRooms.push(room);
        j = lps[j - 1];
      }
      else if (i < N && pat.charAt(j) != txt.charAt(i)) {
        if (j != 0)
          j = lps[j - 1];
        else
          i = i + 1;
      }
    }
  });
}

function displayRooms(rooms) {
  var roomTableBody = $("#room-table-body");
  roomTableBody.empty();

  rooms.forEach(function (room) {
    var row = $("<tr>");
    var nameCell = $("<td>").text(room.type);
    var locationCell = $("<td>").text(
      room.country +
        ", " +
        room.city +
        ", " +
        room.address +
        ", Floor " +
        room.floor_number +
        ", Room " +
        room.door_number
    );
    var sizeCell = $("<td>").text(room.size + " m²");

    var amenitiesCell = $("<td>");
    room.amenities.forEach(function (amenity) {
      var amenityElement = $("<p>").text(amenity.name);
      amenitiesCell.append(amenityElement);
    });

    var priceCell = $("<td>").text(room.Price.price);
    var paymentCell = $("<td>").text(room.Price.frequency);

    var detailsCell = $("<td>");
    var detailsLink = $("<a>")
      .attr("href", "/room/" + room.id)
      .text("Details");
    detailsCell.append(detailsLink);

    row.append(
      nameCell,
      locationCell,
      sizeCell,
      amenitiesCell,
      priceCell,
      paymentCell,
      detailsCell
    );
    roomTableBody.append(row);
  });
}
