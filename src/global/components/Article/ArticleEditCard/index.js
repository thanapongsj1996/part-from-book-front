import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Typography,
  Grid,
  TextField,
  TextareaAutosize,
} from '@material-ui/core'
import { useFormik } from 'formik'
import * as yup from 'yup'

import useStyles from './ArticleEditCard.css'
import { filetoBase64 } from 'utils/conversion.util'

import { ARTICLE } from 'global/constants/article.const'

const validationSchema = yup.object({
  title: yup.string().required('กรุณาระบุเรื่อง'),
  description: yup.string().required('กรุณาระบุข้อความ'),
})

const noPicUrl =
  'https://storage.googleapis.com/part-from-book-storage/user-images/nopic.png'

const ArticleEditCard = ({ darkMode, article, setArticle, ...props }) => {
  const classes = useStyles()
  const fileInputRef = useRef(null)
  const [displayPic, setDisplayPic] = useState(noPicUrl)

  const formik = useFormik({
    initialValues: {
      title: article.title,
      description: article.body,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => submit(values),
  })

  useEffect(() => {
    updateDisplayPic()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article, article.uploadedFile])

  const updateDisplayPic = async () => {
    const { photo, uploadedFile } = article
    if (uploadedFile) {
      const base64 = await filetoBase64(uploadedFile)
      setDisplayPic(base64)
    } else {
      setDisplayPic(photo || noPicUrl)
    }
  }

  const handleUploadPic = async (event) => {
    if (event) {
      const [file] = event.target.files
      let error

      if (!ARTICLE.PIC_FILE.FORMATS.includes(file.type)) {
        error = 'กรุณาอัพโหลดไฟล์ JPG หรือ PNG เท่านั้น'
      } else if (file.size > ARTICLE.PIC_FILE.MAX_SIZE) {
        error = 'ไฟล์รูปมีขนาดเกินกว่า 1 MB'
      }

      if (error) {
        setArticle({ ...article, uploadedFile: null, error })
        return
      }

      setArticle({ ...article, uploadedFile: file })
      fileInputRef.current.value = null
    } else {
      fileInputRef.current.click()
    }
  }

  const submit = (values) => {
    const { uploadedFile, error } = article

    if (error) {
      return
    }

    if (article.state === ARTICLE.STATE.EDIT) {
      alert(uploadedFile ? 'อัพโหลดรูปใหม่' : 'ใช้รูปเดิม')
      back()
    } else {
      if (!uploadedFile) {
        alert('กรุณาอัพโหลดไฟล์รูปภาพ')
        return
      }
    }
  }

  const isError = useCallback(
    (key) => formik.touched[key] && Boolean(formik.errors[key]),
    [formik.errors, formik.touched]
  )

  const back = () => {
    if (article._id) {
      setArticle({ ...article, state: ARTICLE.STATE.READ })
    }
  }

  const labelClasses = useCallback(
    (key) => {
      const classList = [classes.label]

      if (darkMode) classList.push('dark')

      if (isError(key)) classList.push('error')

      return classList.join(' ')
    },
    [classes.label, darkMode, isError]
  )

  const inputClasses = useMemo(() => {
    const classList = [classes.input]

    if (darkMode) classList.push('dark')

    return classList.join(' ')
  }, [classes.input, darkMode])

  const textAreaClasses = useMemo(() => {
    const classList = [classes.textArea]

    if (darkMode) classList.push('dark')

    return classList.join(' ')
  }, [classes.textArea, darkMode])

  return (
    <>
      <img className={classes.media} src={displayPic} alt="upload" />
      <input
        ref={fileInputRef}
        className="hide"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleUploadPic}
      />

      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Button
            className={classes.uploadPicBtn}
            variant="contained"
            color="primary"
            onClick={() => handleUploadPic()}
          >
            เปลี่ยนรูปภาพ
          </Button>
        </Grid>
        <Grid item>
          {article.error ? (
            <Typography
              variant="caption"
              className={classes.picCaption + ' error'}
            >
              {article.error}
            </Typography>
          ) : (
            <Typography variant="caption" className={classes.picCaption}>
              JPG, PNG ขนาดไม่เกิน 1 MB
            </Typography>
          )}
        </Grid>
      </Grid>

      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <div className={classes.formGroup}>
          <label className={labelClasses('title')}>เรื่อง</label>
          <TextField
            className={inputClasses}
            variant="outlined"
            name="title"
            fullWidth
            value={formik.values.title}
            onChange={formik.handleChange}
            error={isError('title')}
            helperText={formik.touched.title && formik.errors.title}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={labelClasses('description')}>ข้อความ</label>
          <TextareaAutosize
            className={textAreaClasses}
            name="description"
            rowsMin={5}
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {isError('description') && (
            <p className="error-text">
              {formik.touched.description && formik.errors.description}
            </p>
          )}
        </div>

        <Grid container spacing={2} justify="center">
          <Grid item container justify="center" xs={12} sm={6}>
            <Button
              className={classes.actionBtn}
              variant="contained"
              color="primary"
              type="submit"
            >
              แก้ไข
            </Button>
          </Grid>
          <Grid item container justify="center" xs={12} sm={6}>
            <Button
              className={classes.actionBtn}
              variant="contained"
              onClick={back}
            >
              ยกเลิก
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

const mapStates = ({ appState }) => ({ darkMode: appState.darkMode })

const mapActions = {}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(ArticleEditCard)
