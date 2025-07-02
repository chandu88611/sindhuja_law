import React from 'react'

function Pricing() {
  return (
    <div>
        
        <div className="container-fluid bg-page-header" style={{ marginBottom: 90 }}>
  <div className="container">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 400 }}
    >
      <h3 className="display-3 text-white text-uppercase ">Pricing</h3>
      <div className="d-inline-flex text-white">
        <p className="m-0 text-uppercase">
          <a className="text-white" href="">
            Home
          </a>
        </p>
        <i className="fa fa-angle-double-right pt-1 px-3" />
        <p className="m-0 text-uppercase">Pricing</p>
      </div>
    </div>
  </div>
</div>
        <div className="container p-3" style={{background:'rgb(0,0,0,.1)'}} id='pricing'>

  <h6  style={{fontSize:'25px',textAlign:'center'}}>Our Plans</h6>
       
          <p className='text-center'>
          Our legal experts draft the complaint details and send legal notice to the concerned company to claim the dispute amount.       </p>
   
    
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5px" }}>
   

    <div className="shadow-custom rounded p-2 bg-white">
      <h2 className='text-center' style={{textShadow:'1px 1px 1px '}}>LEGAL FEES RS.699+18% GST</h2>
      <ul className="list-group">
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Advocate Legal Fees</li>
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Notary & Documentary Fee</li>
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Lost Amount RS. 0 - 10,000/-</li>
      </ul>
      <a href="#" className="btn btn-primary " style={{margin:'20px',marginLeft:'0px'}}>Register</a>
    </div>



    <div className="shadow-custom rounded p-2 bg-white">
      <h2 className='text-center' style={{textShadow:'1px 1px 1px '}}>LEGAL FEES RS.1499 +18% GST</h2>
      <ul className="list-group">
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Advocate Legal Fees</li>
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Notary & Documentary Fee</li>
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Lost Amount RS. 10,001 - 20,000/-</li>
      </ul>
      <a href="#" className="btn btn-primary " style={{margin:'20px',marginLeft:'0px'}}>Register</a>
    </div>
 


    <div className="shadow-custom rounded p-2 bg-white">
      <h2 className='text-center' style={{textShadow:'1px 1px 1px '}}>LEGAL FEES RS.1999+18% GST</h2>
      <ul className="list-group">
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Advocate Legal Fees</li>
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Notary & Documentary Fee</li>
        <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Lost Amount RS. 20,001k - 50,000/-</li>
      </ul>
      <a href="#" className="btn btn-primary " style={{margin:'20px',marginLeft:'0px'}}>Register</a>
    </div>
 
        <div className="shadow-custom rounded p-2 bg-white">
            <h2 className='text-center' style={{textShadow:'1px 1px 1px '}}>LEGAL FEES RS.2999 +18% GST</h2>
            <ul className="list-group">
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Advocate Legal Fees</li>
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Notary & Documentary Fee</li>
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Lost Amount RS.50,001 - 1 lac</li>
            </ul>
            <a href="#" className="btn btn-primary">Subscribe</a>
        </div>
    
        <div className="shadow-custom rounded p-2 bg-white">
            <h2 className='text-center' style={{textShadow:'1px 1px 1px '}}>LEGAL FEES RS.5999 +18% GST</h2>
            <ul className="list-group">
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Advocate Legal Fees</li>
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Notary & Documentary Fee</li>
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Lost Amount RS.1 lac - 3 lac</li>
            </ul>
            <a href="#" className="btn btn-primary">Subscribe</a>
        </div>
    
        <div className="shadow-custom rounded p-2 bg-white">
            <h2 className='text-center' style={{textShadow:'1px 1px 1px '}}>LEGAL FEES RS.6999 +18% GST</h2>
            <ul className="list-group">
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Advocate Legal Fees</li>
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Notary & Documentary Fee</li>
                <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Lost Amount RS Above 3 lac</li>
            </ul>
            <a href="#" className="btn btn-primary">Subscribe</a>
        </div>
    

</div>
 
    </div>
    </div>
  )
}

export default Pricing