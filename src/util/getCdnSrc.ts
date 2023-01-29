import { buildImageUrl } from 'cloudinary-build-url';

interface IGetCdnSrc {
  src: string;
  width: number;
  height: number;
}

export const getCdnSrc = ({ src, width, height }: IGetCdnSrc) => {
  const imageName = (() => src?.split('/').pop() || '')().replace(
    /.jpg|.png/,
    '',
  );

  try {
    if (!imageName) throw new Error('No image name found');

    return buildImageUrl(imageName, {
      transformations: {
        resize: {
          type: 'scale',
          width,
          height,
        },
      },
    });
  } catch (e) {
    return buildImageUrl('not_found_nz7sch', {
      transformations: {
        resize: {
          type: 'scale',
          width,
          height,
        },
      },
    });
  }
};
