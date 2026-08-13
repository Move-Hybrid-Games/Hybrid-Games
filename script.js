/* =========================================================
   MOVE HYBRID GAMES
   SCRIPT.JS
========================================================= */


/* =========================================================
   CUENTA REGRESIVA
========================================================= */

/*
   Fecha del próximo evento:

   03 DE OCTUBRE DE 2026

   Formato:
   YYYY-MM-DDTHH:mm:ss
*/

const eventDate = new Date("2026-10-03T00:00:00");


/*
   Elementos HTML donde mostraremos
   la cuenta regresiva.
*/

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


/*
   Agrega un 0 delante de números
   menores a 10.

   Ejemplo:

   7  → 07
   25 → 25
*/

function pad(value) {

    return String(value).padStart(2, "0");

}


/*
   Actualizar cuenta regresiva
*/

function updateCountdown() {

    const now = new Date();

    const difference =
        eventDate.getTime() -
        now.getTime();


    /*
       Si la fecha ya llegó,
       ponemos todo en cero.
    */

    if (difference <= 0) {

        daysElement.textContent = "00";

        hoursElement.textContent = "00";

        minutesElement.textContent = "00";

        secondsElement.textContent = "00";

        return;

    }


    /*
       Convertimos los milisegundos
       restantes.
    */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60))
            % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60))
            % 60
        );


    const seconds =
        Math.floor(
            (difference /
                1000)
            % 60
        );


    /*
       Mostramos los valores.
    */

    daysElement.textContent =
        pad(days);

    hoursElement.textContent =
        pad(hours);

    minutesElement.textContent =
        pad(minutes);

    secondsElement.textContent =
        pad(seconds);

}


/*
   Ejecutamos inmediatamente
   para que no aparezca 00 al cargar.
*/

updateCountdown();


/*
   Actualizamos cada segundo.
*/

setInterval(
    updateCountdown,
    1000
);



/* =========================================================
   MENÚ MOBILE
========================================================= */


/*
   Elementos del menú.
*/

const menuToggle =
    document.querySelector(
        ".menu-toggle"
    );


const mainNav =
    document.querySelector(
        ".main-nav"
    );


/*
   Abrir / cerrar menú.
*/

if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                mainNav.classList.toggle(
                    "open"
                );


            menuToggle.classList.toggle(
                "active",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}



/* =========================================================
   CERRAR MENÚ AL HACER CLICK
========================================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navigationLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                if (!mainNav) return;


                mainNav.classList.remove(
                    "open"
                );


                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }
);



/* =========================================================
   NAVBAR — SECCIÓN ACTIVA
========================================================= */


/*
   Detectamos las secciones
   principales de la página.
*/

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


/*
   Todos los links del navbar.
*/

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


/*
   IntersectionObserver permite detectar
   qué sección está visible.
*/

const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    /*
                       Quitamos "active"
                       de todos.
                    */

                    navLinks.forEach(
                        link => {

                            link.classList.remove(
                                "active"
                            );

                        }
                    );


                    /*
                       Buscamos el link
                       correspondiente
                       a la sección.
                    */

                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    /*
                       Activamos el link.
                    */

                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }
            );

        },
        {

            /*
               La sección se considera
               activa cuando entra
               en esta zona de la pantalla.
            */

            rootMargin:
                "-35% 0px -55% 0px",

            threshold: 0

        }
    );


/*
   Observamos cada sección.
*/

sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);



/* =========================================================
   ANIMACIÓN DE ENTRADA
========================================================= */


/*
   Elementos que aparecerán
   suavemente cuando entren
   en pantalla.
*/

const animatedElements =
    document.querySelectorAll(
        ".info-card, .demo-section"
    );


/*
   Configuración del observer.
*/

const animationObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {

            threshold: 0.15

        }
    );


animatedElements.forEach(
    element => {

        animationObserver.observe(
            element
        );

    }
);



/* =========================================================
   EFECTO SUAVE DEL HERO
========================================================= */


/*
   Movimiento muy sutil del fondo
   cuando movemos el mouse.
*/

const hero =
    document.querySelector(
        ".hero"
    );


const heroBackground =
    document.querySelector(
        ".hero-bg"
    );


if (hero && heroBackground) {

    hero.addEventListener(
        "mousemove",
        event => {

            /*
               Calculamos la posición
               del mouse.
            */

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5);


            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5);


            /*
               Movimiento pequeño
               para no marear al usuario.
            */

            heroBackground.style.transform =
                `translate(
                    ${x * 8}px,
                    ${y * 8}px
                )`;

        }
    );


    /*
       Volvemos el fondo a su posición
       cuando el mouse sale.
    */

    hero.addEventListener(
        "mouseleave",
        () => {

            heroBackground.style.transform =
                "translate(0, 0)";

        }
    );

}



/* =========================================================
   PROTECCIÓN PARA REDUCIR MOVIMIENTO
   SI EL USUARIO LO SOLICITA
========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (
    prefersReducedMotion.matches
) {

    document.documentElement.style
        .scrollBehavior = "auto";

}



/* =========================================================
   CONSOLA
========================================================= */

console.log(
    "%c MOVE HYBRID GAMES ",
    "background:#7b2cff;color:white;font-size:16px;font-weight:bold;padding:8px;"
);


console.log(
    "%c Próximo evento: 03 OCTUBRE 2026 ",
    "color:#16d5f4;font-size:13px;font-weight:bold;"
);

/* =========================================================
   MODAL DE INSCRIPCIÓN
========================================================= */

const registrationModal =
    document.getElementById(
        "registrationModal"
    );


const registrationClose =
    document.getElementById(
        "registrationClose"
    );


const registrationOverlay =
    document.getElementById(
        "registrationOverlay"
    );


const registrationForm =
    document.getElementById(
        "registrationForm"
    );


/*
   Todos los botones que abren
   la inscripción.
*/

const registrationButtons =
    document.querySelectorAll(
        ".btn-primary"
    );


/*
   Abrir formulario
*/

registrationButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                registrationModal.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);


/*
   Cerrar formulario
*/

function closeRegistration() {

    registrationModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


/*
   Botón X
*/

if (registrationClose) {

    registrationClose.addEventListener(
        "click",
        closeRegistration
    );

}


/*
   Clic fuera del formulario
*/

if (registrationOverlay) {

    registrationOverlay.addEventListener(
        "click",
        closeRegistration
    );

}


/*
   Tecla ESC
*/

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            registrationModal.classList.contains(
                "active"
            )
        ) {

            closeRegistration();

        }

    }
);


/* =========================================================
   ENVÍO DEL FORMULARIO
========================================================= */

if (registrationForm) {

    registrationForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            /*
               Validación HTML.
            */

            if (
                !registrationForm.checkValidity()
            ) {

                registrationForm.reportValidity();

                return;

            }


            const submitButton =
                document.getElementById(
                    "registrationSubmit"
                );


            const message =
                document.getElementById(
                    "registrationMessage"
                );


            /*
               Estado de envío.
            */

            submitButton.disabled =
                true;


            submitButton.querySelector(
                "span"
            ).textContent =
                "PROCESANDO...";


            /*
               IMPORTANTE:

               Aquí posteriormente
               conectaremos Power Automate.

               Por ahora simulamos
               el envío.
            */

            setTimeout(
                () => {

                    submitButton.disabled =
                        false;


                    submitButton.querySelector(
                        "span"
                    ).textContent =
                        "ENVIAR INSCRIPCIÓN";


                    message.innerHTML =
                        `
                        <strong>
                            ¡INSCRIPCIÓN RECIBIDA!
                        </strong>
                        <br><br>
                        Tus datos están listos
                        para ser registrados.
                        `;


                    message.classList.add(
                        "active"
                    );


                    /*
                       En la siguiente etapa
                       enviaremos estos datos
                       automáticamente a:

                       1. Excel Online
                       2. Correo electrónico
                    */

                },
                1200
            );

        }
    );

}
