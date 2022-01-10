<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttachmentsTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('attachments', function (Blueprint $table){
            $table->id();
            $table->string('attachable_type');
            $table->bigInteger('attachable_id')->unsigned();
            //File Info
            $table->string('original_name');
            $table->string('file')->unique();
            $table->string('extension');
            $table->bigInteger('size')->unsigned();
            $table->timestamps();   //created_at and updated_at
            $table->softDeletes();  //deleted_at
            $table->bigInteger('created_by')->unsigned();
            $table->bigInteger('updated_by')->unsigned()->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('attachments');
    }
}
