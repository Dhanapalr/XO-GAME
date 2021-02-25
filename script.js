let i = 1;
let check = true;

function game(d) {
  aa0 = document.getElementById("a0");
  aa1 = document.getElementById("a1");
  aa2 = document.getElementById("a2");
  bb0 = document.getElementById("b0");
  bb1 = document.getElementById("b1");
  bb2 = document.getElementById("b2");
  cc0 = document.getElementById("c0");
  cc1 = document.getElementById("c1");
  cc2 = document.getElementById("c2");

  switch (d) {
    case 1:
      aa0.value == ""
        ? i % 2 == 0
          ? ((aa0.value = "X"), i++)
          : ((aa0.value = "O"), i++)
        : null;
      break;
    case 2:
      aa1.value == ""
        ? i % 2 == 0
          ? ((aa1.value = "X"), i++)
          : ((aa1.value = "O"), i++)
        : null;
      break;
    case 3:
      aa2.value == ""
        ? i % 2 == 0
          ? ((aa2.value = "X"), i++)
          : ((aa2.value = "O"), i++)
        : null;
      break;
    case 4:
      bb0.value == ""
        ? i % 2 == 0
          ? ((bb0.value = "X"), i++)
          : ((bb0.value = "O"), i++)
        : null;
      break;
    case 5:
      bb1.value == ""
        ? i % 2 == 0
          ? ((bb1.value = "X"), i++)
          : ((bb1.value = "O"), i++)
        : null;
      break;
    case 6:
      bb2.value == ""
        ? i % 2 == 0
          ? ((bb2.value = "X"), i++)
          : ((bb2.value = "O"), i++)
        : null;
      break;
    case 7:
      cc0.value == ""
        ? i % 2 == 0
          ? ((cc0.value = "X"), i++)
          : ((cc0.value = "O"), i++)
        : null;
      break;
    case 8:
      cc1.value == ""
        ? i % 2 == 0
          ? ((cc1.value = "X"), i++)
          : ((cc1.value = "O"), i++)
        : null;
      break;
    case 9:
      cc2.value == ""
        ? i % 2 == 0
          ? ((cc2.value = "X"), i++)
          : ((cc2.value = "O"), i++)
        : null;
  }

  bingo();
}

function bingo() {
  a0 = aa0.value;
  a1 = aa1.value;
  a2 = aa2.value;
  b0 = bb0.value;
  b1 = bb1.value;
  b2 = bb2.value;
  c0 = cc0.value;
  c1 = cc1.value;
  c2 = cc2.value;

  if (i > 5) {
    a0 == b0 && a0 == c0 && a0 != "" && b0 != "" && c0 != ""
      ? end(a0)
      : (check = false);
    a1 == b1 && a1 == c1 && a1 != "" && b1 != "" && c1 != ""
      ? end(a1)
      : (check = false);
    a2 == b2 && a2 == c2 && a2 != "" && b2 != "" && c2 != ""
      ? end(b2)
      : (check = false);
    a0 == a1 && a0 == a2 && a0 != "" && a1 != "" && a2 != ""
      ? end(a0)
      : (check = false);
    b0 == b1 && b0 == b2 && b0 != "" && b1 != "" && b2 != ""
      ? end(b0)
      : (check = false);
    c0 == c1 && c0 == c2 && c0 != "" && c1 != "" && c2 != ""
      ? end(c0)
      : (check = false);
    a0 == b1 && a0 == c2 && a0 != "" && b1 != "" && c2 != ""
      ? end(a0)
      : (check = false);
    a2 == b1 && a2 == c0 && a2 != "" && b1 != "" && c0 != ""
      ? end(a2)
      : (check = false);
  }

  if (i > 9 && !check) {
    alert("DRAW");
    window.location.reload();
  }
}

function end(player) {
  check = !check;
  alert(`Bingo  ${player} Wins !!!`);
  i = 1;
  window.location.reload();
}
