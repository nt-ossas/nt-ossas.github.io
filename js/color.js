// Change color of the page
function changeColor(){
  const color = document.getElementById("color").value;
  const giants = document.querySelectorAll(".gigante");
  const logos = document.querySelectorAll(".logo h3");
  const boxes = document.querySelectorAll(".box");
  const presentations = document.querySelectorAll(".presentation");
  const navbars = document.querySelectorAll(".navbar");
  const menus = document.querySelectorAll(".menu-items");
  const footerCols = document.querySelectorAll(".footer-links a");
  const footerIcons = document.querySelectorAll(".social-links a");
  const h4s = document.querySelectorAll(".footer-col h4");
  const options = document.querySelectorAll(".menu-items a");
  const links = document.querySelectorAll("p a");
  const selects = document.querySelectorAll("select");
  const chooses = document.querySelectorAll(".choose img");
  const c1s = document.querySelectorAll(".c1");
  const pcpartpickers = document.querySelectorAll(".pcpartpicker");


  //change giant color
  giants.forEach((giant) => {
    giant.style.color = color;
  });

  //change pcpartpicker color
  pcpartpickers.forEach((pcpartpicker) => {
    pcpartpicker.style.borderColor = color;
  });

  //change giant color
  c1s.forEach((c1) => {
    c1.style.color = color;
  });

  //change giant color
  chooses.forEach((choose) => {
    choose.style.borderColor = color;
  });

  //change a color
  links.forEach((link) => {
    link.style.color = color;
  });

  //change h4 borders color
  h4s.forEach((h4) => {
    h4.style.borderColor = color;
  });

  //change presentations borders color
  presentations.forEach((presentation) => {
    presentation.style.borderColor = color;
  });

  //change logo color
  logos.forEach((logo) => {
    logo.style.color = color;
  });

  //change box borders
  boxes.forEach((box) => {
    box.style.borderColor = color;
  });

  //change navbar borders
  navbars.forEach((navbar) => {
    navbar.style.borderColor = color;
  });

  //change menu borders
  menus.forEach((menu) => {
    menu.style.borderColor = color;
  });

  //change footer links
  options.forEach((option) => {
    option.style.color = "inherit";
    option.addEventListener("mouseover", () => {
      option.style.color = color;
    });
    option.addEventListener("mouseout", () => {
      option.style.color = "inherit";
    });
  });

  //change footer links
  footerCols.forEach((footerCol) => {
    footerCol.style.color = "inherit";
    footerCol.addEventListener("mouseover", () => {
      footerCol.style.color = color;
    });
    footerCol.addEventListener("mouseout", () => {
      footerCol.style.color = "inherit";
    });
  });

  //change footer icons
  footerIcons.forEach((footerIcon) => {
    footerIcon.style.backgroundColor = "rgb(33,33,33)";
    footerIcon.addEventListener("mouseover", () => {
      footerIcon.style.backgroundColor = color;
    });
    footerIcon.addEventListener("mouseout", () => {
      footerIcon.style.backgroundColor = "rgb(33,33,33)";
    });
  });

  //change select color
  selects.forEach((select) => {
    select.style.backgroundColor = color;
    select.addEventListener("mouseover", () => {
      select.style.backgroundColor = color;
    });
    select.addEventListener("mouseout", () => {
      select.style.backgroundColor = color;
    });
  });
};
  
  //change color page load 
  window.onload = changeColor;

  /*// Change color of the page
function changeColor() {
    const color = document.getElementById("color").value;
    const giants = document.querySelectorAll(".gigante");
    const logos = document.querySelectorAll(".logo h3");
    const boxes = document.querySelectorAll(".box");
    const presentations = document.querySelectorAll(".presentation");
    const navbars = document.querySelectorAll(".navbar");
    const menus = document.querySelectorAll(".menu-items");
    const footerCols = document.querySelectorAll(".footer-links a");
    const footerIcons = document.querySelectorAll(".social-links a");
    const h4s = document.querySelectorAll(".footer-col h4");
    const h5s = document.querySelectorAll(".abt h5");
    const h1s = document.querySelectorAll(".abt h1");
    const options = document.querySelectorAll(".menu-items a");
    const links = document.querySelectorAll("p a");
    const selects = document.querySelectorAll("select");
    const buttons = document.querySelectorAll("button");
    const animations = document.querySelectorAll(".animation span");
    const loginas = document.querySelectorAll(".login-page a");
    const minis = document.querySelectorAll(".mini span");
    const ssd = document.getElementById("ssd");
    const selecteds = document.querySelectorAll(".selected");
    const choosens = document.querySelectorAll(".choosen");
    const us = document.querySelectorAll(".binance a u");

    //change giant color
    giants.forEach((giant) => {
        giant.style.color = color;
    });

    //change ssd color
    ssd.style.color = color;

    //change choosen color
    choosens.forEach((choosen) => {
        choosen.style.color = color;
    });

    //change us color
    us.forEach((u) => {
        u.style.color = color;
    });

    //change selected color
    selecteds.forEach((selected) => {
        selected.style.borderColor = color;
    });

    //change minis color
    minis.forEach((mini) => {
        mini.style.color = color;
    });

    //change login a color
    loginas.forEach((login) => {
        login.style.backgroundColor = color;
    });

    //change animations color
    animations.forEach((animation) => {
        animation.style.color = color;
        animation.style.borderColor = color;
    });

    //change buttons color
    buttons.forEach((button) => {
        button.style.backgroundColor = color;
    });

    //change a color
    links.forEach((link) => {
        link.style.color = color;
    });

    //change h4 borders color
    h4s.forEach((h4) => {
        h4.style.borderColor = color;
    });

    //change presentations borders color
    presentations.forEach((presentation) => {
        presentation.style.borderColor = color;
    });

    //change giant color
    h5s.forEach((h5) => {
        h5.style.color = color;
    });

    //change giant color
    h1s.forEach((h1) => {
        h1.style.color = color;
    });

    //change logo color
    logos.forEach((logo) => {
        logo.style.color = color;
    });

    //change box borders
    boxes.forEach((box) => {
        box.style.borderColor = color;
    });

    //change navbar borders
    navbars.forEach((navbar) => {
        navbar.style.borderColor = color;
    });

    //change menu borders
    menus.forEach((menu) => {
        menu.style.borderColor = color;
    });

    //change footer links
    options.forEach((option) => {
        option.style.color = "inherit";
        option.addEventListener("mouseover", () => {
            option.style.color = color;
        });
        option.addEventListener("mouseout", () => {
            option.style.color = "inherit";
        });
    });

    //change footer links
    footerCols.forEach((footerCol) => {
        footerCol.style.color = "inherit";
        footerCol.addEventListener("mouseover", () => {
            footerCol.style.color = color;
        });
        footerCol.addEventListener("mouseout", () => {
            footerCol.style.color = "inherit";
        });
    });

    //change footer icons
    footerIcons.forEach((footerIcon) => {
        footerIcon.style.backgroundColor = "rgb(33,33,33)";
        footerIcon.addEventListener("mouseover", () => {
            footerIcon.style.backgroundColor = color;
        });
        footerIcon.addEventListener("mouseout", () => {
            footerIcon.style.backgroundColor = "rgb(33,33,33)";
        });
    });

    //change select color
    selects.forEach((select) => {
        select.style.backgroundColor = color;
        select.addEventListener("mouseover", () => {
            select.style.backgroundColor = color;
        });
        select.addEventListener("mouseout", () => {
            select.style.backgroundColor = color;
        });
    });
}

//change color page load 
window.onload = changeColor;*/