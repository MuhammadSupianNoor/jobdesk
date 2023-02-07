module.exports={
    index: async(req,res)=>{
        try{
            res.render('admin/tutorial4/view_tutorial', {
                name: req.session.user.name,
                title: 'Tugas Belajar/ Izin Belajar',
               
              })
        }catch (err) {
            console.log(err)
        }
    }
}