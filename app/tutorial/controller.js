module.exports={
    index: async(req,res)=>{
        try{
            res.render('admin/tutorial/view_tutorial', {
                name: req.session.user.name,
                title: 'NIDN',
               
              })
        }catch (err) {
            console.log(err)
        }
    }
}