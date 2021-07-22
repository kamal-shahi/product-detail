const Tabs = ()=> {
    return(
        <ul className="nav nav-tabs text-left w-100 pb-2 border-0">
            <li><a data-toggle="tab" className="py-3 border-bottom border-primary pr-5 mr-5 text-decoration-none text-left text-dark" href="#home">Description</a></li>
            <li><a data-toggle="tab" className="py-3 pr-5 mr-5 text-decoration-none text-left text-dark" href="#menu1">Reviews <span className="text-warn-badge ml-3">18</span></a></li>
            <li><a data-toggle="tab" className="py-3 pr-5 mr-5 text-decoration-none text-left text-dark" href="#menu2">Questions <span className="text-warn-badge ml-3">8</span></a></li>
        </ul>
    )
}

export default Tabs;