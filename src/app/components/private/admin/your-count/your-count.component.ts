import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { CountService } from 'src/app/services/count.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-your-count',
  templateUrl: './your-count.component.html',
  styleUrls: ['./your-count.component.css', './../../../../../assets/css/css-dash/css/vertical-layout-light/style.css', "./../../../../../assets/css/sb-admin-2.css" ]
})
export class YourCountComponent implements OnInit {
  countForm: FormGroup

  public imageUrl: String = "./../../../../../../assets/img/700x400.png"


  public imageFile!: File

  constructor(private fb: FormBuilder, private countService: CountService, private toastr: ToastrService, private router: Router) {
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
    this.countForm = this.fb.group(formControls)
  }

  get image() { return this.countForm.get('image') }

  get fullname() { return this.countForm.get('fullname') }
  get description() { return this.countForm.get('description') }
  get facebook() { return this.countForm.get('facebook') }
  get instagram() { return this.countForm.get('instagram') }
  get twitter() { return this.countForm.get('twitter') }
  get linkedin() { return this.countForm.get('linkedin') }
  ngOnInit(): void {
  }

  onFileSelect(event: any) {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event) => this.imageUrl = event.target?.result?.toString()!
    this.imageFile=event.target.files[0]
  }


  count() {
    let data = this.countForm.value;
    
    const formData=new FormData()


    formData.append("fullname", data.fullname )
    formData.append("description", data.description )
    formData.append("facebook", data.facebook )
    formData.append("instagram", data.instagram )
    formData.append("twitter", data.twitter )
    formData.append("linkedin", data.linkedin )
    formData.append("image",this.imageFile)



    this.countService.count(formData).subscribe(
      res => {
        this.toastr.success(res.message);

        this.router.navigate(['']);
      },
      err => {
        this.toastr.success(err.message);

      }
    )
  }
}
