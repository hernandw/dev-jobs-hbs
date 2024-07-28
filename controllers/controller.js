const home = (req, res) => {
    res.render('home', {
        title: 'Home'
    })
}

export const controller = {
    home
}