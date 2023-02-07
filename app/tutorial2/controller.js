module.exports={
    index: async(req,res)=>{
        try{
            res.render('admin/tutorial2/view_tutorial', {
                name: req.session.user.name,
                title: 'Homebase Internal',
               
              })
        }catch (err) {
            console.log(err)
        }
    }
}