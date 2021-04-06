package ru.mirea.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("image")
public class ImageController {
    private ImageService imageService;

    @PostMapping("add")
    @CrossOrigin
    public void save(@RequestBody Image image) {
        if (!image.getUrl().isEmpty()) {
            imageService.save(image);
        }
    }

    @DeleteMapping("remove")
    @CrossOrigin
    public int remove(@RequestParam int id)
    {
        imageService.deleteById(id);
        return id;
    }

    @GetMapping("getAll")
    @CrossOrigin
    public List<Image> getAll() {
        return imageService.findAll();
    }

    @Autowired
    public void setImageService(ImageService imageService) {
        this.imageService = imageService;
    }
}
