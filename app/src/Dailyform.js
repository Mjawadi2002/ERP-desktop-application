import { Link } from 'react-router-dom';
import './Dailyform.css'
export default function DailyForm(){
    return(
        <div className="container-fluid">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <div className=" form" >
            <h3>Fill daily</h3>
            <form >
              <div className="form-group ">
                <label htmlFor="username">Express*</label>
                <input 
                  type="Number" 
                  id="username" 
                  className="form-control" 
                  placeholder="Enter quantity" 
                 
                />
              </div>

              <div className="form-group ">
                <label htmlFor="username">Capucin*</label>
                <input 
                  type="Number" 
                  id="username" 
                  className="form-control" 
                  placeholder="Enter quantity" 
                 
                />
              </div>
              <div className="form-group ">
                <label htmlFor="username">Direct*</label>
                <input 
                  type="Number" 
                  id="username" 
                  className="form-control" 
                  placeholder="Enter quantity" 
                 
                />
              </div>
              <div className="form-group ">
                <label htmlFor="username">Juice*</label>
                <input 
                  type="Number" 
                  id="username" 
                  className="form-control" 
                  placeholder="Enter quantity" 
                />
              </div>
              <br/>
              <button type="submit" className="btn btn-warning " style={{ marginRight: '10px' }}>
               <Link to='/manageservice' style={{textDecoration:"none",color:"black"}}>Save</Link>
              </button>
            </form>
          </div>
        </div>
    );
}