import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { SecretaryService } from 'src/app/services/secretary.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secretary-add',
  templateUrl: './secretary-add.component.html',
  styleUrls: ['./secretary-add.component.css', './../../../../../../assets/css/css-dash/css/vertical-layout-light/style.css', './../../../../../../assets/css/sb-admin-2.css']
})
export class SecretaryAddComponent implements OnInit {

  secretaryAddForm: FormGroup

  public imageUrl: String = "./../../../../../../assets/img/700x400.png"


  public imageFile!: File

  constructor(private fb: FormBuilder, private secretaryService: SecretaryService, private toastr: ToastrService, private router: Router) {
    let formControls = {

      image: new FormControl('',
      [Validators.required,
      ]),

      fullname: new FormControl('',
        [Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(2)]
      ),
    
      description: new FormControl('',
        [Validators.required,
        Validators.email
        ]),

      facebook: new FormControl('',
        [Validators.required,
        ]
      ),
      twitter: new FormControl('',
        [Validators.required,
        ]
      ),
      instagram: new FormControl('',
        [Validators.required,
        ]
      ),
      linkedin: new FormControl('',
        [Validators.required,
        ]
      ),




    }
    this.secretaryAddForm = this.fb.group(formControls)
  }
  get image() { return this.secretaryAddForm.get('image') }

  get fullname() { return this.secretaryAddForm.get('fullname') }
  get description() { return this.secretaryAddForm.get('description') }
  get facebook() { return this.secretaryAddForm.get('facebook') }
  get instagram() { return this.secretaryAddForm.get('instagram') }
  get twitter() { return this.secretaryAddForm.get('twitter') }
  get linkedin() { return this.secretaryAddForm.get('linkedin') }



  ngOnInit(): void {
  }

  onFileSelect(event: any) {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event) => this.imageUrl = event.target?.result?.toString()!
    this.imageFile=event.target.files[0]
  }

  addsecretary() {
    let data = this.secretaryAddForm.value;
    
    const formData=new FormData()


    formData.append("fullname", data.fullname )
    formData.append("description", data.description )
    formData.append("facebook", data.facebook )
    formData.append("instagram", data.instagram )
    formData.append("twitter", data.twitter )
    formData.append("linkedin", data.linkedin )
    formData.append("image",this.imageFile)



    this.secretaryService.addsecretary(formData).subscribe(
      res => {
        this.toastr.success(res.message);

        this.router.navigate(['/admin/team']);
      },
      err => {
        this.toastr.success(err.message);

      }
    )
  }
}
