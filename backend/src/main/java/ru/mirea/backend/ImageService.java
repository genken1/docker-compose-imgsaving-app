package ru.mirea.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ImageService {
    private ImageRepository imageRepository;

    @Transactional
    public void save(Image image) {
        imageRepository.save(image);
    }

    @Transactional
    public void deleteById(int id) {
        imageRepository.deleteById(id);
    }

    @Transactional
    public List<Image> findAll() {
        return imageRepository.findAll();
    }

    @Autowired
    public void setImageRepository(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }
}
