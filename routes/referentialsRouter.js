const Router = require("express").Router;

const router = new Router();

router.get("/get", (req, res) => {
    const referentials = [
        {   
            text: 'Fue realmente fácil, en una semana vendí mi piso',
            name: 'Sonia M. '
        },
        {   
            text: 'Me resultó muy sencillo todo el proceso',
            name: 'Carlos F.'
        },
        {   
            text: 'Te acompañan durante todo el proceso',
            name: 'Maria C.'
        },
        {   
            text: 'Clicpiso es lo que necesitaba',
            name: 'Sonia H.'
        },
    ]
    try {
        res.status(200).send(referentials);

    } catch (error) {
        res.status(500).send({ msg: error.message});
    }
});

module.exports = router