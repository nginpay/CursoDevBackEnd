exports.hello = async (req, res) => {
    const msg = "Hello World"
    res.status(200).json({msg});
};