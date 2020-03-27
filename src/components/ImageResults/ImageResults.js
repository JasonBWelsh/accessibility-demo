import React from 'react';

function ImageResults({ images }) {
  console.log('xxx', images);
  return (
    <div className="images-container">
      {images.map(img => (
        <img
          className="image"
          key={img.id}
          src={img.previewURL}
          alt={img.tags}
        />
      ))}
    </div>
  );
}

export default ImageResults;

/////

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// // import tileData from './tileData';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper
//   },
//   gridList: {
//     width: 500,
//     height: 450
//   }
// }));

// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  * const tileData = [
//  *   {
//  *     img: image,
//  *     title: 'Image',
//  *     author: 'author',
//  *     cols: 2,
//  *   },
//  *   {
//  *     [etc...]
//  *   },
//  * ];
//  */
// function ImageGridList({ images }) {
//   console.log('images prop ===', images);
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={160} className={classes.gridList} cols={3}>
//         {images.map(img => (
//           <GridListTile key={img.id} cols={img.cols || 1}>
//             <img src={img.previewURL} alt={img.tags} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

// export default ImageGridList;
