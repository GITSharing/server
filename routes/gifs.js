const router = require('express')();

const upload = require('../helpers/');
const { GifController } = require('../controllers');

router.get('/', GifController.getAll);
router.post('/', upload.multer.single('image'), upload.sendUploadToGCS, GifController.create);
router.delete('/:id', GifController.delete);


module.exports = router;