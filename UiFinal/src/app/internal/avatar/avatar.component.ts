import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FileUploaderService } from 'src/app/services/file-uploader.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  constructor(private userService:UserService,
    private fileUploader: FileUploaderService) { }

  ngOnInit() {
  }

  fileuploaderFileChange(files: FileList){
    // console.log('uploading ',files[0].name);
    this.fileUploader.uploadFile(files[0])
    .subscribe((result)=>{
      this.userService.current.imageUrl = result.imageUrl;
      // updating the imageURl in the api
      this.userService.updateProfileImage()
      .subscribe((result)=>{
        console.log(result);
      });
    });
  }
}
