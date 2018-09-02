import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import 'react-dropzone-component/styles/filepicker';
import 'dropzone/dist/min/dropzone.min';

const djsConfig = {
  acceptedFiles: "image/jpeg,image/png,image/gif",
  autoProcessQueue: false,
  uploadMultiple: false,
  addRemoveLinks: true
}

const componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  showFiletypeIcon: true,
  maxFiles: 1,
  postUrl: 'no-url'
}


export default class ImageUploader extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  showPreview = image => {
    if(image == null) return;

    let mockFile = {
      name: image.filename,
      size: image.byte_size,
      dataURL: image.url,
    };

    this.myDropzone.files.push(mockFile);
    this.myDropzone.emit("addedfile", mockFile);
    this.myDropzone.createThumbnailFromUrl(
      mockFile,
      this.myDropzone.options.thumbnailWidth,
      this.myDropzone.options.thumbnailHeight,
      this.myDropzone.options.thumbnailMethod,
      true,
      thumbnail => {
        this.myDropzone.emit('thumbnail', mockFile, thumbnail);
        this.myDropzone.emit("complete", mockFile);

      }
    );

    this.myDropzone.options.maxFiles = this.myDropzone.options.maxFiles - 1;
  }

  remove = image => {
    this.myDropzone.removeAllFiles(true);
    this.myDropzone.files.push(image);
    this.myDropzone.emit("addedfile", image);
  }

  render() {
    const { image } = this.props;
    const eventHandlers = {
      init: dropzone => {
        this.myDropzone = dropzone;
        this.showPreview(image);
      },
      maxfilesexceeded: file => this.remove(file),
    }

    return (
      <DropzoneComponent
        config={componentConfig}
        eventHandlers={eventHandlers}
        djsConfig={djsConfig}
      />
    );
  }
}

// import React from 'react';
// import DropzoneComponent from 'react-dropzone-component';
// import 'react-dropzone-component/styles/filepicker';
// import 'dropzone/dist/min/dropzone.min';

// const djsConfig = {
//   acceptedFiles: "image/jpeg,image/png,image/gif",
//   autoProcessQueue: false,
//   uploadMultiple: false,
//   addRemoveLinks: true
// }

// const componentConfig = {
//   iconFiletypes: ['.jpg', '.png', '.gif'],
//   showFiletypeIcon: true,
//   postUrl: 'no-url'
// }


// export default class ImageUploader extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   images: [this.props.recipe.image]
//     // }
//     this.showPreview = this.showPreview.bind(this);
//     this.removePrevFile = this.removePrevFile.bind(this);
//   }

//   showPreview = image => {
//     if(image == null) return;

//     let mockFile = {
//       name: image.filename,
//       size: image.byte_size,
//       dataURL: image.url,
//     };

//     this.myDropzone.files.push(mockFile);
//     this.myDropzone.emit("addedfile", mockFile);
//     this.myDropzone.options.maxFiles = 1;
//     this.myDropzone.createThumbnailFromUrl(
//       mockFile,
//       this.myDropzone.options.thumbnailWidth,
//       this.myDropzone.options.thumbnailHeight,
//       this.myDropzone.options.thumbnailMethod,
//       true,
//       thumbnail => {
//         this.myDropzone.emit('thumbnail', mockFile, thumbnail);
//         this.myDropzone.emit("complete", mockFile);
//       }
//     );
//   }

//   removePrevFile = () => {
//     if(this.myDropzone.files < 2) return;

//     this.myDropzone.removeFile(this.myDropzone.files[0]);
//   }

//   render() {
//     const { image } = this.props;
//     const eventHandlers = {
//       init: dropzone => {
//         this.myDropzone = dropzone,
//         this.showPreview(image)
//       },
//       addedfile: image => {
//         this.removePrevFile()
//         // this.props.saveImage(image)
//       },
//       // thumbnail: image => this.showThumbnail(image),
//       removedfile: image => {
//         debugger
//         this.props.removeImage(image)
//       }
//     }

//     return (
//       <DropzoneComponent
//         config={componentConfig}
//         eventHandlers={eventHandlers}
//         djsConfig={djsConfig}
//       />
//     );
//   }
// }


// const ImageUploader = ({ recipe, saveImage, removeImage }) => {
//   const rec = recipe;
//   const djsConfig = {
//     acceptedFiles: "image/jpeg,image/png,image/gif",
//     autoProcessQueue: false,
//     uploadMultiple: false
//   }

//   const showThumbnail = (myDropzone, recipe) => {
//     debugger

//     let image = recipe.image_data;
//     let mockFile = {
//       name: image.filename,
//       size: image.byte_size,
//       dataURL: image.url,
//     };

//     myDropzone.files.push(mockFile);
//     myDropzone.emit("addedfile", mockFile);
//     myDropzone.createThumbnailFromUrl(
//       mockFile,
//       myDropzone.options.thumbnailWidth,
//       myDropzone.options.thumbnailHeight,
//       myDropzone.options.thumbnailMethod,
//       true,
//       thumbnail => {
//         myDropzone.emit('thumbnail', mockFile, thumbnail);
//         myDropzone.emit("complete", mockFile);
//       }
//     );

//     myDropzone.options.maxFile = 1;
//   }

//   const eventHandlers = {
//     init: dropzone => {
//       this.myDropzone = dropzone;
//       showThumbnail(recipe).bind(this);
//     },
//     addedfile: image => saveImage(image),
//     thumbnail: image => showThumbnail(recipe, image),
//     removedfile: image => removeImage(imdage)
//   }

//   const componentConfig = {
//     iconFiletypes: ['.jpg', '.png', '.gif'],
//     showFiletypeIcon: true,
//     postUrl: 'no-url'
//   }

//   return (
//     <DropzoneComponent
//       config={componentConfig}
//       eventHandlers={eventHandlers}
//       djsConfig={djsConfig}
//     />
//   )
// }

// export default ImageUploader;
