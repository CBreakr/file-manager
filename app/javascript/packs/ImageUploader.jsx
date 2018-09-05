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

  removePrevAndAddNew = image => {
    let prevImage = this.myDropzone.files[0];
    this.myDropzone.emit('removedfile', prevImage);
    this.myDropzone.files.push(image);
  }

  render() {
    const { image } = this.props;
    const eventHandlers = {
      init: dropzone => {
        this.myDropzone = dropzone;
        this.showPreview(image);
      },
      maxfilesexceeded: image => this.removePrevAndAddNew(image),
      addedfile: image => this.props.selectImage(image),
      removedfile: image => this.props.unselectImage(image)
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
