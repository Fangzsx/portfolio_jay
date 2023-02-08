const Class = ({className}) => (
    <div className='d-flex flex-row'>
        <label className='class-color mx-1'>class</label>
        <label className='symbols-color'>="</label>
        <label className='values-color'>{className}</label>
        <label className='symbols-color'>"</label>
    </div>

)
export default Class;
