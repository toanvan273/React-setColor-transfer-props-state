import React, {Component} from 'react'
import './Calendar.css'
import moment from 'moment'

class Calendar extends Component{
    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearNav: false,
        selectedDay: null
    }

    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
        this.style.width = this.width; // add this
    }
    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }
    // *=============================*
    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }
    // setMonth = (month) => {
    //     // console.log(month)
    //     let monthNo = this.months.indexOf(month);
    //     let dateContext = Object.assign({}, this.state.dateContext);
    //     dateContext = moment(dateContext).set("month", monthNo);
    //     this.setState({
    //         dateContext: dateContext
    //     });
    // }
    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }
    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth()
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth()
    }
    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();

    }
    SelectList = (props) => {

        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="/" onClick={(e) => {this.onSelectChange(e, data)}}>
                        {data}
                    </a>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    }
    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }

    // MonthNav = () => {
    //     return (
    //         <span className="label-month" onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
    //             {this.month()}
    //             {this.state.showMonthPopup &&
    //              <this.SelectList data={this.months} />
    //             }
    //         </span>
    //     );
    // }
    MonthNav = () => {
        return (
            <span className="label-month"
                onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                 <this.SelectList data={this.months} />
                }
            </span>
        );
    }
    showYearEditor = () => {
        this.setState({
            showYearNav: true
        })

    }
    // YearNav = () => {
    //     return (
    //         this.showYearNav ?
    //         <input defaultValue={this.year()} className="editor-year"
    //         ref={(yearInput) => {this.yearInput = yearInput}}
    //         onKeyUp={(e) => {this.onKeyUpYear(e)}}
    //         onChange={(e) => {this.onYearChange(e)}}
    //         type="number"
    //         placeholder="year" />
    //         :
    //         <span className="label-year"
    //         onDoubleClick={ (e) => {this.showYearEditor()} } >
    //             {this.year()}
    //         </span>
    //     )
    // }
    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }
    onYearChange = (e) => {
        // console.log(e.target)
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }
    onKeyUpYear = (e) => {
        if(e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }
    YearNav = () => {
        return (
            this.state.showYearNav ?
            <input
                defaultValue = {this.year()}
                className="editor-year"
                ref={(yearInput) => { this.yearInput = yearInput}} // no need too must (T)
                onKeyUp= {(e) => this.onKeyUpYear(e)}
                onChange = {(e) => this.onYearChange(e)}
                type="number"
                placeholder="year"/>
            :
            <span
                className="label-year"
                onDoubleClick={(e)=> { this.showYearEditor()}}>
                {this.year()}
            </span>
        );
    }

    render(){
        
        // let B = moment().subtract('M')
        // let C = this.currentDay()
        // let A = this.weekdaysShort.slice(1).concat(this.weekdaysShort.slice(0,1))
        // console.log('B',B)
        // console.log('C',C)
        // console.log('A',A)
        // let firstDay = moment(dateContext).startOf('month').format('d')
        // console.log('A',this.weekdaysShort)
        // console.log('currentDate',this.state.dateContext.get('date'))
        // console.log('daysInMonth',this.state.dateContext.daysInMonth())
        // console.log('FULL',this.state.dateContext.format()),
        // console.log('Năm',this.state.dateContext.format('Y'))
        // console.log('Tháng',this.state.dateContext.format('MMMM'))
        // console.log('Ngày',this.state.dateContext.format("D"))
        // console.log('Giờ',this.state.dateContext.format('H'))
        // console.log('Phút',this.state.dateContext.format('mm'))
        // console.log('Giây',this.state.dateContext.format('ss'))

        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });
        let dateContext = Object.assign({}, this.state.dateContext);
        // console.log('days', this.state.dateContext.daysInMonth() )
        let numberDaysPrevMonth = moment(dateContext).subtract(1, "month").daysInMonth();
        let Blank = [];
        for (let i = 1; i <= numberDaysPrevMonth; i++) {
            Blank.push(i)
        }
        Blank = Blank.reverse()
        // console.log('Blank',Blank)
        let blanks = [];
        let showblanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks = Blank.slice(0,this.firstDayOfMonth())
            blanks = blanks.reverse()
            // blanks.push(<td key={i * 80} className="emptySlot">
            //     {""}
            //     </td>
            // );
        }
        // console.log('blanks',blanks)
        
        blanks.map( e => {
            return(
                showblanks.push(
                    <td key={e} className="emptySlot">
                        <span>{e}</span>
                    </td>
                )
            )
        })
        // console.log('showblanks',showblanks)
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day" : "day");
            // let selectedClass = (d === this.state.selectedDay ? " selected-day " : "")
            daysInMonth.push(
                <td key={d} className={className} >
                    <span >{d}</span>
                </td>
            );
        }
        // console.log('daysInMonth',daysInMonth)
        
        var totalSlots = [...showblanks, ...daysInMonth];
        console.log('totalSlots',totalSlots)
        let numberDaysNextMonth = moment(dateContext).add(1, "month").daysInMonth();
        let Blanks2 = [];
        let blanks2 = [];
        let showblanks2 = [];
        for(let i = 1; i <= numberDaysNextMonth; i++){
            Blanks2.push(i)
        }
        for (let j = 0; j < 35 - totalSlots.length; j++) {
            blanks2 = Blanks2.slice(0,totalSlots.length === 36 ? 42 - totalSlots.length : 35 - totalSlots.length)
            // blanks2.push(<td key={j * 80} className="emptySlot">
            //     {""}
            //     </td>
            // );
        }
        console.log('blanks2', blanks2)
        blanks2.map( e => {
            return(
                showblanks2.push(
                    <td key={e} className="emptySlot">
                        <span>{e}</span>
                    </td>
                )
            )
        })
        console.log('showblanks2', showblanks2)
        var totalSlots2 = [...totalSlots,...showblanks2]
        // console.log('R', totalSlots2)
        let rows = [];
        let cells = [];
       
        totalSlots2.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
                
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
               
            }
            if (i === totalSlots2.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
                
            }
        });
       
        let trElems = rows.map((d, i) => {
            return (
                <tr key={i*100}>
                    {d}
                </tr>
            );
        })


        return(
            <div className="calendar-container" style={this.style}>
                
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="5">
                                <this.MonthNav />
                            {' '}
                            <this.YearNav />
                                
                            </td>
                            <td colSpan="2" className="nav-month">
                            <i className="prev fa fa-fw fa-chevron-left"
                                onClick={(e)=> {this.prevMonth()}}>
                            </i>
                            <i className="prev fa fa-fw fa-chevron-right"
                                onClick={(e)=> {this.nextMonth()}}>
                            </i>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElems}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Calendar