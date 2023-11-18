import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            count: 50,
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const lengthTitle = event.target.value;
        const limitChar = 50 - lengthTitle.length;
    
        if (limitChar >= 0) {
          this.setState(() => ({
            title: lengthTitle,
            count: limitChar,
          }));
        }
      }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return(
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                <h2 className="note-input__title__char-limit">Sisa karakter : {this.state.count}</h2>
                <input className="input-title" type="text" placeholder="Masukkan judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea className="input-body" placeholder="Masukkan catatanmu disini" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Buat</button>
            </form>
        );
    }
}

export default NoteInput;