const getContacts = (req,res) =>{
    res.status(200).json({messege: "Get all contacts"});
};

const CreateContact = (req,res) =>{
    console.log(req.body);
    res.status(200).json({messege: "Create contact"});
};

const getContact =(req,res) =>{
    res.status(200).json({messege: `Get contact for ${req.params.id}`});
};

const updateContact = (req,res) =>{
    res.status(200).json({messege: `Update contact for ${req.params.id}`});
};

const deleteContact = (req,res) =>{
    res.status(200).json({messege: `Delete contact for ${req.params.id}`});
};

module.exports = {
    getContacts,
    CreateContact,
    getContact,
    updateContact,
    deleteContact,
  } ;


