var performance = function () {
    function showHeader() {
        var header = ["Starożytny Sumer", "Strona o cywilizacji Sumerów", "ok. 3750-2004 p.n.e."];
        for (i = 0; i < 3; i++) {
            var node = document.createElement("span");
            document.getElementById("NAGLOWEK").appendChild(node), node.innerHTML = header[i]
        }
    }

    function insertHamburger() {
        var div = document.createElement("div"),
            header = document.getElementById("NAGLOWEK"),
            span = document.querySelector("span");
        div.className = "hamburger";
        header.insertBefore(div, span);
    }


    /*
     * Odpowiada za wyświetlanie lub ukrywanie poza krawędzią viewportu 
       menu po kliknięciu/dotknięciu
     */

    function toggleMenu() {
        var hamburger = document.getElementsByClassName("hamburger")[0],
            menu = document.getElementById("MENU");
            hamburger.addEventListener("click", function() {
                if (menu.style.left === "-80%" || menu.style.left === "") {
                    menu.style.left = "4%";
                    hamburger.classList.add("hamburgerClicked");
                } else if (menu.style.left === "4%") {
                    menu.style.left = "-80%";
                    hamburger.classList.remove("hamburgerClicked");
                }
                
            });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                menu.style.left = "-20px;"
            } else if (window.innerWidth <= 768 && menu.style.left === "-20px") {
                menu.style.left = "4%";
            }
        }, false)

    }

    // clean third level menu
    function thirdLevelMobileMenuCleaner() {
        const ulBlokClass = document.querySelectorAll(".blok");
        for(let i = 0; i < ulBlokClass.length; i++) {
            if(ulBlokClass[i].id === "display") {
                ulBlokClass[i].id = "";
                ulBlokClass[i].parentNode.childNodes[0].childNodes[1].classList.remove("upSideDown")
            };
        }
        console.log("third level menu cleaned");
    }

    // Transforms desktop menu in mobile menu
    function transformToMobileMenu() {       
        if (window.innerWidth < 770 ) {
            const arrows = document.querySelectorAll(".menuArrow");
            for (let i = 0; i < arrows.length; i++) {
                // moving apart mobile menu in order to display submentu
                arrows[i].addEventListener("click", function(event) {
                    event.preventDefault();
                    const ulUnderArrow = arrows[i].parentNode.parentNode.childNodes[1];
                    if (ulUnderArrow.id == "display") {
                        ulUnderArrow.id = "";
                        arrows[i].classList.remove("upSideDown");
                        // cleans third level menu
                        thirdLevelMobileMenuCleaner();
                    } else {
                        ulUnderArrow.id = "display";
                        arrows[i].classList.add("upSideDown");
                    }
                });
            }
        }
    }
    // displays big version of the picture after clicking in small one
    function displayBigImg() {
        $(document).ready(function () {
            $("figure a").fancybox({
                overlayColor: "#877973",
                overlayOpacity: .8,
                transitionIn: "elastic",
                transitionOut: "elastic",
                easingIn: "easeInSine",
                easingOut: "easeOutSine",
                titlePosition: "inside",
                cyclic: true
            })
        })
    }
    // displays picture in gallery
    function galleryService() {
        $(document).ready(function () {
            $("#galeria a").fancybox({
                overlayColor: "#D12424",
                overlayOpacity: ".9",
                padding: 10,
                changeSpeed: 900,
                transitionIn: "fade",
                transitionOut: "fade",
                easingIn: "easeInSine",
                essingOut: "easeOutSine",
                titlePosition: "outside",
                cyclic: !0
            })
        })
    }
    // displays label to inform user when he cliks in link he'll be passed to external website
    function displayAnotherWebsiteLabel() {
        $(document).ready(function () {
            $(".etykieta").hide();
            $(".wyzwalacz").mouseover(function () {
                var poziomaWspolrzedna,
                    pionowaWspolrzedna,
                    $this = $(this),
                    $data_tooltip = $($this.attr("data-tooltip")),
                    pozycjaWyzwalacza = $this.offset(),
                    wyzwalaczWys = $this.outerHeight(),
                    wyzwalaczSzer = $this.outerWidth(),
                    etykietaWys = $data_tooltip.outerHeight(),
                    etykietaSzer = $data_tooltip.outerWidth(),
                    oknoSzer = $(window).width(),
                    przewiniete = $(document).scrollTop();
                if (pozycjaWyzwalacza.top - etykietaWys - przewiniete > 0) {
                    pionowaWspolrzedna = pozycjaWyzwalacza.top - etykietaWys - 10;
                } // if
                else {
                    pionowaWspolrzedna = pozycjaWyzwalacza.top + wyzwalaczWys + 10;
                } // else

                var wystajePoza = (pozycjaWyzwalacza.left + etykietaSzer) - oknoSzer;
                if (wystajePoza > 0) {
                    poziomaWspolrzedna = pozycjaWyzwalacza.left - wystajePoza - 10;
                } // if
                else {
                    poziomaWspolrzedna = pozycjaWyzwalacza.left;
                }

                $data_tooltip.css({
                    left: poziomaWspolrzedna,
                    top: pionowaWspolrzedna,
                    position: "absolute"
                }).fadeIn(200);
            }); // koniec mouseover 
            $(".wyzwalacz").mouseout(function () {
                $(".etykieta").fadeOut(200);
            });
        }); // koniec ready 
    }
    // creates ">" mark if menu element has submenu
    function createExtendingMark(url, i, level) {
        if (level) {
            let divElement = document.createElement("div");
            divElement.classList.add("menuArrow");
            divElement.innerText = ">";
            url.appendChild(divElement);
        }
    }

    function under319px() {
        let paragraphElement = document.createElement("p");

        function showMessage() {
            if (window.innerWidth < 319) {
                paragraphElement.innerText = "Ta strona nie jest obsługiwana w rozdzielczości niższej niż 319 pikseli szerokości wyświetlacza. Proszę o użycie urządzenia z szerszym ekranem.";
                document.body.appendChild(paragraphElement);
            }
        }
        showMessage();

        window.addEventListener("resize", function () {
            showMessage();
        }, false);
    }
    return {
        showHeader: showHeader,
        insertHamburger: insertHamburger,
        toggleMenu: toggleMenu,
        transformToMobileMenu: transformToMobileMenu,
        displayBigImg: displayBigImg,
        galleryService: galleryService,
        displayAnotherWebsiteLabel: displayAnotherWebsiteLabel,
        createExtendingMark: createExtendingMark,
        under319px: under319px
    }
}();
var menu = function () {
    var menuIDElement = document.getElementById("MENU");

    function setMenu() {
        var ulElement = document.createElement("ul");
        ulElement.classList.add("nav");
        // first level declaration
        for (let i in data.menu) {
            let liElement = document.createElement("li");
            let urlElement = document.createElement("a");
            setList(liElement, ulElement);
            setURL(urlElement, data.menu[i].url, liElement, data.menu[i].name);
            performance.createExtendingMark(urlElement, i, data.menu[i].extand);
            //second level declaration
            if (data.menu[i].extand) {
                var ulElement1 = document.createElement("ul");
                ulElement1.classList.add("podmenu");
                for (let j in data.menu[i].extandContent) {
                    let liElement1 = document.createElement("li");
                    let urlElement1 = document.createElement("a");
                    setList(liElement1, ulElement1);
                    setURL(urlElement1, data.menu[i].extandContent[j].url, liElement1, data.menu[i].extandContent[j].name);

                    // adding CSS classes to <li></li> second level

                    switch (liElement1.innerText) {
                        case data.menu[3].extandContent[0].name:
                            liElement1.classList.add("gliptyka");
                            break;
                        case data.menu[3].extandContent[2].name:
                            liElement1.classList.add("plaskorzezba");
                            break;
                        case data.menu[4].extandContent[0].name:
                            liElement1.classList.add("swiatynie");
                            break;
                        case data.menu[6].extandContent[0].name:
                            liElement1.classList.add("krolowie");
                            break;
                        case data.menu[6].extandContent[7].name:
                            liElement1.classList.add("okrNowosum");
                            break;
                        default:
                            console.log("switch works");
                    };

                    performance.createExtendingMark(urlElement1, j, data.menu[i].extandContent[j].extand);
                    //third level declaration
                    if (data.menu[i].extandContent[j].extand) {
                        let ulElement2 = document.createElement("ul");
                        ulElement2.classList.add("blok");
                        for (var k in data.menu[i].extandContent[j].extandContent) {
                            let liElement2 = document.createElement("li");
                            let urlElement2 = document.createElement("a");
                            setList(liElement2, ulElement2);
                            setURL(urlElement2, data.menu[i].extandContent[j].extandContent[k].url, liElement2, data.menu[i].extandContent[j].extandContent[k].name);

                            // adding CSS classes to <li></li> second level

                            switch (liElement2.innerText) {
                                case data.menu[3].extandContent[0].extandContent[5].name:
                                    liElement2.classList.add("pieczecie");
                                    break;
                                case data.menu[6].extandContent[7].extandContent[0].name:
                                    liElement2.classList.add("urIII");
                            }

                            performance.createExtendingMark(urlElement2, j, data.menu[i].extandContent[j].extandContent[k].extand);

                            //fourth level declaration
                            if (data.menu[i].extandContent[j].extandContent[k].extand) {
                                let ulElement3 = document.createElement("ul");
                                for (var x in data.menu[i].extandContent[j].extandContent[k].extandContent) {
                                    let liElement3 = document.createElement("li");
                                    let urlElement3 = document.createElement("a");
                                    setList(liElement3, ulElement3 /*data.menu[i].extandContent[j].extandContent[k].extandContent[x].name*/ );
                                    setList(liElement3, ulElement3);
                                    setURL(urlElement3, data.menu[i].extandContent[j].extandContent[k].extandContent[x].url, liElement3, data.menu[i].extandContent[j].extandContent[k].extandContent[x].name);
                                }
                                liElement2.appendChild(ulElement3);

                                // internet explore implementation

                                if (navigator.userAgent.indexOf("Trident") > -1) {
                                    console.log(ulElement3.parentNode.innerText);
                                    if (ulElement3.parentNode.innerText.indexOf(data.menu[3].extandContent[0].extandContent[5].name) > -1) {

                                        ulElement3.className = "odciski";
                                    } else if (ulElement3.parentNode.innerText.indexOf(data.menu[6].extandContent[7].extandContent[0].name) > -1) {
                                        ulElement3.className = "urIIIpodzial";
                                    }

                                } // different browser 
                                else {

                                    if (ulElement3.parentNode.innerText.includes(data.menu[3].extandContent[0].extandContent[5].name)) {
                                        ulElement3.classList.add("odciski");
                                    } else if (ulElement3.parentNode.innerText.includes(data.menu[6].extandContent[7].extandContent[0].name)) {
                                        ulElement3.classList.add("urIIIpodzial");
                                    }

                                }

                            }
                        }
                        liElement1.appendChild(ulElement2); // submitting third level
                    }
                }
                liElement.appendChild(ulElement1); // submitting second level
            }
        }

        /*
         * this function gives the name to the article from menu navigation
         */

        function setList(li, parent) {
            // li       - takes <li></li> element, which should get a name
            // parent   - takes parent element (always <ul></ul>)
            parent.appendChild(li)
        };

        /*
         * this function set url to the menu article
         */

        function setURL(anchor, url, liParent, innerText) {
            // anchor    - takes <a></a> html element
            // url       - takes url from data base
            // liParent  - takes parent element (always <li></li>)
            // innerText - takes the name of the article from data base
            anchor.setAttribute("href", url);
            anchor.innerText = innerText;
            liParent.appendChild(anchor);
        };
        menuIDElement.appendChild(ulElement);

    };
    return {
        menuIDElement: menuIDElement,
        setMenu: setMenu
    }
}();
var aside = function () {
    const displaySideBar = () => {
        const setWaterMark = (url, alternativeText) => {
            const imgElement = document.createElement("img");
            imgElement.setAttribute("class", "bocznyDingir");
            imgElement.setAttribute("src", url);
            imgElement.setAttribute("alt", alternativeText);
            menu.menuIDElement.appendChild(imgElement)
        }

        const setHeader = text => {
            const spanElement = document.createElement("span");
            menu.menuIDElement.appendChild(spanElement);
            spanElement.innerHTML = text;
        }

        const showTiles = () => {
            const asideDingir = "/grafika/zdjecia/dingir/dingir_przezroczysty_wersja2.gif";
            const asideDingirAltText = "Skrzydlaty dysk symbolizował sumeryjskich bogów";
            const numberOfTiles = 8;

            const getFromVariable = index => {
                switch(index) {
                    case 2: return 0;
                    break;
                    case 4: return 4;
                    break;
                    case 6: return 8;
                    break;
                }
            }

            const getToVariable = index => {
                switch(index) {
                    case 2: return 3;
                    break;
                    case 4: return 7;
                    break;
                    case 6: return 8;
                    break;
                }
            }

            const getHeader = index => {
                switch(index) {
                    case 1: return "Co nowego";
                    break;
                    case 3: return "Ostatnio aktualizowane";
                    break;
                    case 5: return "Najczęściej odwiedzane";
                    break;
                }
            }

            for (let i = 0; i < numberOfTiles; i++) {
                if (i === 0 || i === 7) {
                    setWaterMark(asideDingir, asideDingirAltText);
                } else if (i === 2 || i === 4 || i === 6) {
                    let from = getFromVariable(i);
                    let to = getToVariable(i);
                    news.displayBlock(from, to);
                } else {
                    let header = getHeader(i);
                    setHeader(header);
                }
            }
        }

        showTiles();
    }
    return {
        displaySideBar: displaySideBar
    }
}();
var google = function () {
    function displaySearch() {
        var e = "007341217864062862490:oev_bc2l-fs",
            t = document.createElement("script");
        t.type = "text/javascript", t.async = !0, t.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//cse.google.com/cse.js?cx=" + e;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(t, n);
    }
    return {
        displaySearch: displaySearch
    }
}();
var news = function () {
    function displayBlock(startsFrom, endsOn) {
        const TITLE = "Proszę kliknąć, aby przejść do artykułu";
        for (let i = startsFrom; i <= endsOn; i++) {
            const date = document.createElement("em");
            const articleTile = document.createElement("div");
            const shortDescription = document.createElement("div");
            const link = document.createElement("a");
            const articleTitle = link;
            const imgIconLink = link;
            const clickMoreLink = document.createElement("a");
            const icon = document.createElement("img");

            const buildLink = aHTML => {           
                aHTML.setAttribute("href", urls[i]);
                aHTML.setAttribute("title", TITLE);
                if (articleTitle) {
                    aHTML.textContent = titles[i];
                };
            };

            const buildIcon = htmlElement => {
                htmlElement.setAttribute("style", "height: 70; width: 167");
                htmlElement.setAttribute("src", iconsURLs[i]);
                htmlElement.setAttribute("alt", alt[i]);
            }

            const buildShortDescription = textContainer => {
                textContainer.setAttribute("class", "czcionka_co_nowego");
                textContainer.textContent = texts[i];
                return textContainer;
            }

            const buildArticleTiles = element => {
                element.setAttribute("class", "co_nowego");
                element.appendChild(articleTitle);
                element.appendChild(imgIconLink);
                element.appendChild(buildShortDescription(shortDescription));
                return element;
            }

            date.innerText = dates[i];
            menu.menuIDElement.appendChild(date);
            menu.menuIDElement.appendChild(buildArticleTiles(articleTile));
            
            buildLink(articleTitle);
            buildLink(imgIconLink);
            buildIcon(icon);
            imgIconLink.appendChild(icon);

            buildLink(clickMoreLink);
            clickMoreLink.textContent = "więcej>>";

            shortDescription.appendChild(clickMoreLink);
        }
    }
    return {
        displayBlock: displayBlock
    }
}();
var scrolls = function () {
    function goToSection() {
        $(".strukturaArtykulu a").click(function() {
            const section = `[data-section=${$(this).attr("class")}]`;
                $("body, html").animate({
                scrollTop: $(section).offset().top
                })
            })
    }
    function goToUp() {
        $(".gora_strony a").click(function() {
            $("body, html").animate({
                scrollTop: $("#calosc").offset().top
            }) 
        })
    }
    return {
        goToSection: goToSection,
        goToUp: goToUp
    }
}();