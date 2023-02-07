module.exports={
    index: async(req,res)=>{
        try{
            res.render('admin/tutorial3/view_tutorial', {
                name: req.session.user.name,
                title: 'Homebase Eksternal',
               
              })
        }catch (err) {
            console.log(err)
        }
    }
}