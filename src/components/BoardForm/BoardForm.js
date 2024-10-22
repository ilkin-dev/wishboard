import React, { useState } from 'react';
import './BoardForm.scss';
import IconButton from '../IconButton/IconButton';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BoardForm = ({ onSubmit, onBack }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [deadline, setDeadline] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({
        title: '',
        description: '',
        deadline: '',
    });

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setThumbnail(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasErrors = false;
        const newErrors = {
            title: '',
            description: '',
            deadline: '',
        };

        if (!title) {
            newErrors.title = 'Title is required';
            hasErrors = true;
        }

        if (!description) {
            newErrors.description = 'Description is required';
            hasErrors = true;
        }

        const today = new Date();
        const selectedDeadline = new Date(deadline);

        if (!deadline) {
            newErrors.deadline = 'Deadline is required';
            hasErrors = true;
        } else if (selectedDeadline < today.setHours(0, 0, 0, 0)) {
            newErrors.deadline = 'Deadline cannot be before today';
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) return;

        const boardData = {
            title,
            description,
            isPublic,
            deadline,
            thumbnail: thumbnail || 'https://www.infoworld.com/wp-content/uploads/2024/06/sparkler-100703681-orig.jpg?quality=50&strip=all&w=1024',
        };

        onSubmit(boardData);
    };

    const clearError = (field) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
    };

    const handleBlur = (field) => {
        setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
        if (errors[field] && !touched[field]) {
            setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
        }
    };

    return (
        <form className="board-form" onSubmit={handleSubmit}>
            <IconButton icon={faArrowLeft} onClick={onBack} size="small" color="primary" />

            <div className="board-form__group">
                <label className="board-form__label" htmlFor="title">Board Title</label>
                <input
                    type="text"
                    id="title"
                    className={`board-form__input ${errors.title ? 'board-form__input--error' : ''}`}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        clearError('title');
                    }}
                    onBlur={() => handleBlur('title')}
                    required
                />
                {errors.title && touched.title && <p className="board-form__error">{errors.title}</p>}
            </div>

            <div className="board-form__group">
                <label className="board-form__label" htmlFor="description">Description</label>
                <textarea
                    id="description"
                    className={`board-form__input board-form__input--textarea ${errors.description ? 'board-form__input--error' : ''}`}
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                        clearError('description');
                    }}
                    onBlur={() => handleBlur('description')}
                    required
                />
                {errors.description && touched.description && <p className="board-form__error">{errors.description}</p>}
            </div>

            <div className="board-form__group">
                <label className="board-form__label" htmlFor="thumbnail">Thumbnail</label>
                <input
                    type="file"
                    id="thumbnail"
                    className="board-form__input board-form__input--file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                />
            </div>

            <div className="board-form__group board-form__group--inline">
                <label className="board-form__label">Public Board</label>
                <input
                    type="checkbox"
                    className="board-form__checkbox"
                    checked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                />
            </div>

            <div className="board-form__group">
                <label className="board-form__label" htmlFor="deadline">Deadline</label>
                <input
                    type="date"
                    id="deadline"
                    className={`board-form__input ${errors.deadline ? 'board-form__input--error' : ''}`}
                    value={deadline}
                    onChange={(e) => {
                        setDeadline(e.target.value);
                        clearError('deadline');
                    }}
                    onBlur={() => handleBlur('deadline')}
                />
                {errors.deadline && touched.deadline && <p className="board-form__error">{errors.deadline}</p>}
            </div>

            <button type="submit" className="board-form__submit">Create Board</button>
        </form>
    );
};

export default BoardForm;
