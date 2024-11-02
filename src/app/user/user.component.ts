import { Component, Input,input,computed, Output, EventEmitter, output, INJECTOR} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
type User={
  id:string,
  avatar:string,
  name:string
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Output() select=new EventEmitter();
  //select=output<string>();
  get imagePath()
  {
    return 'users/'+this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
