const router = require('express')();

const upload = require('../helpers/');
const { GifController } = require('../controllers');

router.get('/', GifController.getAll);
router.post('/', upload.multer.single('gif'), upload.sendUploadToGCS, GifController.create);
router.delete('/:id', GifController.delete);
router.get('/top3', GifController.getTop3);
router.put('/:id/like', GifController.like);


module.exports = router;