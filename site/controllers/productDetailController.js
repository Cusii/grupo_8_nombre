module.exports = {
    index: (req, res) => {
        res.render('productDetail', {
            title: 'Kairak',
            css: 'productDetail.css'
        })
    }
}