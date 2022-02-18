MASERATI.ToaTiles = function () {
    this.tiles = $('.tile-list__item');
    this.tilesLength = this.tiles.length;
    this.newTiles = '';
    this.tilesPagination = 1;
    this.tileList = $('.tile-list');
    this.customCursor = new MASERATI.CustomCursor(this.tileList);

    this.categoryBtn = $('.toa-page__categoryList__item');
    this.tileCategories = [];

    this.tileItems = '';
    this.categoryItems = gsap.utils.toArray('.toa-page__categoryList__item');

    this.init();
};

MASERATI.ToaTiles.prototype.init = function () {
    let that = this;

    that.tiles.each(function () {
        if (that.checkView($(this))) {
            $(this).addClass('reveal');
        }
    });
    that.onScroll();
    that.categoriesClick();
};

MASERATI.ToaTiles.prototype.onScroll = function () {
    let that = this;
    $(window).on('scroll', function (e) {
        that.tiles.each(function (index) {
            let tile = $(this);
            if (that.checkView(tile)) {
                if (!tile.hasClass('reveal')) {
                    tile.addClass('reveal');
                    if (index === that.tilesLength - 1) {
                        that.addTiles();
                    }
                }
            }
        });
    });
}

MASERATI.ToaTiles.prototype.checkView = function (obj) {
    var top_of_element = obj.offset().top;
    var bottom_of_element = obj.offset().top + obj.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        // If the user has scrolled to the last item of the list
        return true;
    } else {
        return false;
    }
}

MASERATI.ToaTiles.prototype.addTiles = function () {
    let that = this;

    let categoriesUrl = '';
    if (that.tileCategories.length !== 0) {
        categoriesUrl = '.category==' + that.tileCategories.join('+');
    }
    that.tilesPagination++;
    console.log('adding tiles from scroll');
    let pageUrl = Granite.HTTP.getPath() + '/jcr:content/tile-list.page==' + that.tilesPagination + categoriesUrl + '.html';
    $.ajax({
        type: "GET",
        url: pageUrl,
        success: function (data) {
            that.getNewTiles(data);
            for (var i = 0; i < that.newTiles.length; i++) {
                // αν δεν υπαρχει στο ντομ κανε τα παρακατω
                let itemHtml = '<div class="col-sm-6 col-xl-4">' + that.newTiles[i].outerHTML + '</div>';
                $('.tile-list__item-container').append(itemHtml);
            }
            that.updateTileVars();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            that.tilesPagination--;
        },
        dataType: "html"
    });
}

MASERATI.ToaTiles.prototype.updateTileVars = function () {
    let that = this;

    that.tiles = $('.tile-list__item');
    that.tilesLength = $('.tile-list__item').length;
    that.customCursor = new MASERATI.CustomCursor($('.tile-list'));
}

MASERATI.ToaTiles.prototype.getNewTiles = function (data) {
    let that = this;
    let parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    that.newTiles = doc.getElementsByClassName('tile-list__item');
}

MASERATI.ToaTiles.prototype.categoriesClick = function () {
    let that = this;
    that.categoryBtn.on('click', function () {
        that.tilesPagination = 1;
        let selected = false;
        let category = $(this).attr('data-path');
        if ($(this).hasClass('selected')) {
            that.tileCategories.push(category);
            selected = true;
        } else {
            that.tileCategories = jQuery.grep(that.tileCategories, function (value) {
                return value != category;
            });
        }
        // We should load with ajax the extra items
        let pageUrl = Granite.HTTP.getPath() + '/jcr:content/tile-list.category==' + category + '.html';
        // Check how many items we already have in the dom
        let existingItems = $(".tile-list__item[data-category='maserati-category:" + category + "']").length;
        // if existing items are more than
        if (existingItems < 9 && selected) {
            $.ajax({
                type: "GET",
                url: pageUrl,
                success: function (data) {
                    that.tilesPagination = 1;
                    that.getNewTiles(data);
                    let newTilesHtml = '';
                    for (var i = existingItems; i < that.newTiles.length; i++) {
                        let itemHtml = '<div class="col-sm-6 col-xl-4 testing">' + that.newTiles[i].outerHTML + '</div>';
                        newTilesHtml = newTilesHtml + itemHtml;
                    }
                    $('.tile-list__item-container').append(newTilesHtml);
                    that.filterTiles(selected);
                    // const state = Flip.getState(that.categoryItems);
                    that.updateTileVars();
                    that.tiles.each(function () {
                        if (that.checkView($(this))) {
                            $(this).addClass('reveal');
                        }
                    });
                    that.tilesPagination++;
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                    console.log(errorThrown);
                },
                dataType: "html"
            });
        }
    });
}

MASERATI.ToaTiles.prototype.filterTiles = function (selected) {
    let that = this;
    if (that.tileCategories.length == 0) {
        that.tiles.removeClass('close');
    } else {
        that.tiles.each(function () {
            let itemCat = $(this).attr('data-category');
            if (selected) {
                if (itemCat == null || !that.tileCategories.includes(itemCat)) {
                    $(this).addClass('close');
                }
            } else {
                if ($(this).hasClass('close') && that.tileCategories.includes(itemCat)) {
                    $(this).removeClass('close');
                }
            }
        });
    }
}

$(document).ready(function () {
    $(".tile-list").each(function () {
        this.toaTiles = new MASERATI.ToaTiles();
    });
})
