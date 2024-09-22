const ph = {
    gyb: (req, res) => {
        res.render('index');  
    },
    
    about: (req, res) => {
        res.render('about');  
    },
    contact: (req, res) => {
        res.render('contact');  
    },
    inspiration: (req, res) => {
        res.render('inspiration');  
    },
    services: (req, res) => {
        res.render('services');  
    }
};

module.exports = ph;
