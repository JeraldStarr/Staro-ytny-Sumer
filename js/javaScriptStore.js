var performance = function() {
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

        function toggleMenu() {
            var hamburger = document.getElementsByClassName("hamburger")[0],
                menu = document.getElementById("MENU"),
                flag = !0;
            hamburger.onclick = function() {
                flag ? (menu.style.display = "block", flag = false) : (menu.style.display = "none", flag = true)
            }
        }

        function displayBigImg() {
            $(document).ready(function() {
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

        function galleryService() {
            $(document).ready(function() {
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

		function displayAnotherWebsiteLabel() {
		    $(document).ready(function() {
		        $(".etykieta").hide();
		        $(".wyzwalacz").mouseover(function() {
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
		        $(".wyzwalacz").mouseout(function() {
		            $(".etykieta").fadeOut(200);
		        });
		    }); // koniec ready 
		}
        function createExtendingMark(link, li, n, a, newClass) {
            if (li && n && a && newClass) {
                for (var i = 0; i < n.length; i++)
                    if (link.innerText === navArticles[n[i]][0][a[i]]) {
                        li.setAttribute("class", newClass[i]);
                        var div = document.createElement("div");
                        var mark = document.createTextNode(">");
                        div.appendChild(mark), div.setAttribute("class", "menuArrow"), link.appendChild(div)
                    }
            } else {
                var div = document.createElement("div");
                var mark = document.createTextNode(">");
                div.setAttribute("class", "menuArrow");
                div.appendChild(mark);
                link.appendChild(div);
            }
        }
        return {
            showHeader: showHeader,
            insertHamburger: insertHamburger,
            toggleMenu: toggleMenu,
            displayBigImg: displayBigImg,
            galleryService: galleryService,
            displayAnotherWebsiteLabel: displayAnotherWebsiteLabel,
            createExtendingMark: createExtendingMark
        }
    }();
var menu = function() {
        var menuIDElement = document.getElementById("MENU");
        function setMenu() {
            var ulElement = document.createElement("ul");
            ulElement.classList.add("nav");
            // first level declaration
            for(let i in data.menu) {
                let liElement = document.createElement("li"); 
                let urlElement = document.createElement("a");  
                setList(liElement, ulElement);
                setURL(urlElement, data.menu[i].url, liElement, data.menu[i].name);
                //second level declaration
                    if(data.menu[i].extand) {
                        var ulElement1 = document.createElement("ul");
                        ulElement1.classList.add("podmenu");
                        for(let j in data.menu[i].extandContent) {
                            let liElement1 = document.createElement("li");
                            setList(liElement1, ulElement1 /*data.menu[i].extandContent[j].name*/);
                            //third level declaration
                            if(data.menu[i].extandContent[j].extand) {
                                let ulElement2 = document.createElement("ul");
                                for(var k in data.menu[i].extandContent[j].extandContent) {
                                    let liElement2 = document.createElement("li");
                                    setList(liElement2, ulElement2, /*data.menu[i].extandContent[j].extandContent[k].name*/);
                                    //fourth level declaration
                                    if(data.menu[i].extandContent[j].extandContent[k].extand) {
                                        let ulElement3 = document.createElement("ul");
                                        for(var x in data.menu[i].extandContent[j].extandContent[k].extandContent) {
                                            let liElement3 = document.createElement("li");
                                            setList(liElement3, ulElement3 /*data.menu[i].extandContent[j].extandContent[k].extandContent[x].name*/);
                                        } 
                                        liElement2.appendChild(ulElement3);
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
            
            function setURL(anchor, url, liParent, innerText) {
                // anchor    - takes <a></a> html element
                // url       - takes url from menu to the article
                // liParent  - takes parent element (always <li></li>)
                // innerText - takes the name of the article
                anchor.setAttribute("href", url);
                anchor.innerText = innerText;
                liParent.appendChild(anchor);
            };
            menuIDElement.appendChild(ulElement);

        };
        return {
            menuIDElement : menuIDElement,
            setMenu : setMenu
        }
    }();
var aside = function() {
        function displaySideBar() {
            function setWaterMark(url, alternativeText) {
                var imgElement = document.createElement("img");
                imgElement.setAttribute("class", "bocznyDingir");
                imgElement.setAttribute("src", url);
                imgElement.setAttribute("alt", alternativeText);
                menu.menuIDElement.appendChild(imgElement)
            }

            function setInformationBlock(text) {
                var spanElement = document.createElement("span");
                menu.menuIDElement.appendChild(spanElement);
                spanElement.innerHTML = text;
            }
            setWaterMark("/grafika/zdjecia/dingir/dingir_przezroczysty_wersja2.gif", "Skrzydlaty dysk symbolizował sumeryjskich bogów");
            setInformationBlock("Co nowego");
            news.displayBlocks(0, 3);
            setInformationBlock("Ostatnio aktualizowane");
            news.displayBlocks(4, 7);
            setInformationBlock("Najczęściej odwiedzane");
            news.displayBlocks(8, 8);
            setWaterMark("/grafika/zdjecia/dingir/dingir_przezroczysty_wersja2.gif", "Skrzydlaty dysk symbolizował sumeryjskich bogów")
        }
        return {
            displaySideBar: displaySideBar
        }
    }();
var google = function() {
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
var news = function() {
        function displayBlocks(startsFrom, endsOn) {
            const TITLE = "Proszę kliknąć, aby przejść do artykułu";
            for (var i = startsFrom; i <= endsOn; i++) {
                var emElement = document.createElement("em");
                    emElement.innerHTML = dates[i]; 
                    menu.menuIDElement.appendChild(emElement);
                var divElement = document.createElement("div");
                    divElement.setAttribute("class", "co_nowego");
                    menu.menuIDElement.appendChild(divElement);
                var link = document.createElement("a");
                var aElementFirst = link;
                    aElementFirst.setAttribute("href", urls[i]); 
                    aElementFirst.setAttribute("title", TITLE); 
                    aElementFirst.innerHTML = titles[i];
                var aElementSecond = link;
                    aElementSecond.setAttribute("href", urls[i]);
                    aElementSecond.setAttribute("title", TITLE);
                    divElement.appendChild(aElementFirst);
                    divElement.appendChild(aElementSecond);
                var imgElement = document.createElement("img");
                    imgElement.setAttribute("style", "height: 70; width: 167");
                    imgElement.setAttribute("src", iconsURLs[i]);
                    imgElement.setAttribute("alt", alt[i]);
                    aElementSecond.appendChild(imgElement);
                var divElement2 = document.createElement("div");
                    divElement2.setAttribute("class", "czcionka_co_nowego");
                    divElement2.innerHTML = texts[i];
                    divElement.appendChild(divElement2);
                var aElementThird = document.createElement("a");
                    aElementThird.setAttribute("href", urls[i]);
                    aElementThird.setAttribute("title", TITLE);
                    aElementThird.innerHTML = "więcej>>";
                    divElement2.appendChild(aElementThird);
            }
        }
        return {
            displayBlocks: displayBlocks
        }
    }();